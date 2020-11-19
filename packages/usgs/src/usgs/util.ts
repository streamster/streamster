import {
  queryParameters,
  getProperty,
  usgsFetchOptions,
  Services,
} from './types';
import Papa from 'papaparse';

/**
 * The method is used to ensure that one and only one of the required
 * query parameter filters is provided
 * Valid query parameters are "sites", "stateCd", "huc", "bBox", and "counties"
 * If a valid parameter is not provider, a descriptive error is thrown
 */
export const validateRequiredParameters = (
  queryParameters: queryParameters
): void => {
  const requiredParameters = ['sites', 'stateCd', 'huc', 'bBox', 'countyCd'];

  const keys = Object.keys(queryParameters);
  let counter = 0;

  if (keys.length === 0) {
    throw new Error(
      'Please provide a valid major filter. This can be a site, list of sites, State or Territory, Hydrologic Unit Code(s), Latitude/Longitude Box, or Counties. For more information, please consult the USGS Daily Values Web Service URL Generation Tool (https://waterservices.usgs.gov/rest/DV-Test-Tool.html).'
    );
  }

  keys.forEach(key => {
    if (requiredParameters.includes(key)) {
      counter++;
    }
  });

  if (counter === 0) {
    throw new Error(
      'Please provide a valid major filter. This can be a site, list of sites, State or Territory, Hydrologic Unit Code(s), Latitude/Longitude Box, or Counties. For more information, please consult the USGS Daily Values Web Service URL Generation Tool (https://waterservices.usgs.gov/rest/DV-Test-Tool.html).'
    );
  }
};

/**
 * Generates a request URL to the daily service endpoint using the user
 * provided query parameters
 * @returns {string} API url
 */
export const prepareUrl = (
  service: Services,
  queryParameters: queryParameters
): string => {
  let serviceMapped;
  if (service === 'daily') {
    serviceMapped = 'dv';
  } else if (service === 'instantaneous') {
    serviceMapped = 'iv';
  } else if (service === 'sites') {
    serviceMapped = 'site';
  }

  const format = service === 'sites' ? 'rdb' : 'json';

  let baseUrl = `https://waterservices.usgs.gov/nwis/${serviceMapped}/?format=${format}`;
  const keys = Object.keys(queryParameters);
  const params = keys.map((key: any) => {
    return `&${key}=${getProperty(queryParameters, key)}`;
  });

  baseUrl += params.join('');
  return baseUrl;
};

/**
 * Restructures the data into an array of series arrays
 * The data is grouped into arrays for each site present in the data
 * @param {any} data data to restructure
 * @param {object} options name of the field to group by
 * @returns {array}
 */
export const formatGroupedTimeSeriesData = (
  data: any,
  options: usgsFetchOptions
) => {
  const { collapseMethods } = options;
  const { timeSeries } = data.value;

  if (collapseMethods) {
    const parameterSeries = [
      ...new Set(timeSeries.map((t: any) => t.variable.variableDescription)),
    ];
    const locationSeries = [
      ...new Set(timeSeries.map((t: any) => t.sourceInfo.siteName)),
    ];

    const timeSeriesByLocation = locationSeries.map(l => {
      return timeSeries.filter((t: any) => t.sourceInfo.siteName === l);
    });

    const timeSeriesByLocationParameter = timeSeriesByLocation.map(lp => {
      // this should return two arrays for each location
      // one array for each parameter
      const grouped = parameterSeries.map(p => {
        return lp.filter((t: any) => t.variable.variableDescription === p);
      });
      return grouped;
    });

    const series = timeSeriesByLocationParameter.map(lp => {
      const nestedSeries = lp.map(s => {
        const grouped = s.map((s: any) => {
          const { sourceInfo, variable, values } = s;
          const valuesArr = values[0].value;
          const method = values[0].method[0].methodID;
          const results = valuesArr.map((val: any) => {
            const { value, qualifiers, dateTime } = val;
            const { siteName } = sourceInfo;
            const { variableDescription, unit } = variable;
            return {
              siteName,
              variableDescription,
              value,
              unit: unit.unitCode,
              qualifiers,
              dateTime,
              method,
            };
          });
          return results;
        });
        return grouped.reduce((acc: any[], val: any[]) => [...acc, ...val]);
      });
      return nestedSeries;
    });
    return series;
  } else {
    const parameterSeries = [
      ...new Set(timeSeries.map((t: any) => t.variable.variableDescription)),
    ];
    const locationSeries = [
      ...new Set(timeSeries.map((t: any) => t.sourceInfo.siteName)),
    ];

    const timeSeriesByLocation = locationSeries.map(l => {
      return timeSeries.filter((t: any) => t.sourceInfo.siteName === l);
    });

    const timeSeriesByLocationParameter = timeSeriesByLocation.map(lp => {
      // this should return two arrays for each location
      // one array for each parameter
      const grouped = parameterSeries.map(p => {
        return lp.filter((t: any) => t.variable.variableDescription === p);
      });
      return grouped;
    });

    const series = timeSeriesByLocationParameter.map(lp => {
      const nestedSeries = lp.map(s => {
        const grouped = s.map((s: any) => {
          const { sourceInfo, variable, values } = s;
          const valuesArr = values[0].value;
          const method = values[0].method[0].methodID;
          const results = valuesArr.map((val: any) => {
            const { value, qualifiers, dateTime } = val;
            const { siteName } = sourceInfo;
            const { variableDescription, unit } = variable;
            return {
              siteName,
              variableDescription,
              value,
              unit: unit.unitCode,
              qualifiers,
              dateTime,
              method,
            };
          });
          return results;
        });
        return grouped;
      });
      return nestedSeries.reduce((acc: any[], val: any[]) => [...acc, ...val]);
    });
    return series;
  }
};

/**
 * Restructures the data into an array of objects aka a time series
 * @param {any} data data to restructure
 * @returns {array}
 */
export const formatTimeSeriesData = (data: any) => {
  const { timeSeries } = data.value;
  const series = timeSeries.map((series: any) => {
    const { sourceInfo, variable, values } = series;
    const valuesArr = values[0].value;
    const method = values[0].method[0].methodID;
    const results = valuesArr.map((val: any) => {
      const { value, qualifiers, dateTime } = val;
      const { siteName } = sourceInfo;
      const { variableDescription, unit } = variable;
      return {
        siteName,
        variableDescription,
        value,
        unit: unit.unitCode,
        qualifiers,
        dateTime,
        method,
      };
    });
    return results;
  });
  return series.reduce((acc: any[], val: any[]) => [...acc, ...val]);
};

export const updateQueryParameters = (
  existingParams: queryParameters,
  newParams: queryParameters
): queryParameters => {
  return {
    ...existingParams,
    ...newParams,
  };
};

export type Rec = {
  [index: string]: string | number;
};

export const csv2Json = (data: string) => {
  let parsed = Papa.parse(data, { skipEmptyLines: true, delimiter: '\t' });
  const filteredData = parsed.data.filter(d => {
    if (d[0].includes('#') || d[0].includes('5s')) {
      return false;
    }
    return true;
  });

  return filteredData
    .filter((_d, i) => i !== 0)
    .map(d => {
      let rec: Rec = {};
      const keys = filteredData[0];
      keys.map((key: string, index: number) => (rec[key] = d[index]));
      return rec;
    });
};
