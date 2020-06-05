import axios from 'axios';
import {
  queryParameters,
  Config,
  USGSService,
  usgsFetchOptions,
} from './types';
import {
  validateRequiredParameters,
  prepareUrl,
  formatGroupedTimeSeriesData,
  formatTimeSeriesData,
  updateQueryParameters,
  csv2Json,
} from './util';

class usgs implements USGSService {
  service: 'instantaneous' | 'daily' | 'sites';
  queryParameters: queryParameters;

  constructor(config: Config) {
    this.service = config.service;
    this.queryParameters = config.queryParameters;
    validateRequiredParameters(config.queryParameters);
  }

  public update(
    queryParameters: queryParameters,
    options: usgsFetchOptions = { format: 'default' }
  ) {
    this.queryParameters = updateQueryParameters(
      this.queryParameters,
      queryParameters
    );
    return this.fetch(options);
  }

  /**
   * Fetch the data from the USGS Daily Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async fetch(options: usgsFetchOptions = { format: 'default' }) {
    const url = prepareUrl(this.service, this.queryParameters);

    try {
      const data = await axios.get(url).then((result: any) => {
        if (this.service === 'sites') {
          return csv2Json(result.data);
        } else if (options.format === 'default') {
          return result.data;
        } else if (options.format === 'time-series') {
          return formatTimeSeriesData(result.data);
        } else if (options.format === 'grouped-time-series') {
          return formatGroupedTimeSeriesData(result.data, {
            collapseMethods: options.collapseMethods,
          });
        }
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default usgs;
