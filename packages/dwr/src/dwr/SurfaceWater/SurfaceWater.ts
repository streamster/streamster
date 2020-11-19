import axios from 'axios';
import {
  dwrSurfaceWaterService,
  surfaceWaterStationsConfig,
  surfaceWaterStationsQueryParameters,
  getProperty,
  surfaceWaterStationDataTypesQueryParameters,
  surfaceWaterStationDataTypesConfig,
} from './types';

class SurfaceWater implements dwrSurfaceWaterService {
  /**
   * Utility method used to return a query parameter value
   * If an array is found for the query parameter,
   * a case statement is invoked to return the proper formatting
   * for type of equality check
   * @param {object} queryParameters
   * @param {any} key query parameter key
   */
  private setQueryValue(
    queryParameters:
      | surfaceWaterStationsQueryParameters
      | surfaceWaterStationDataTypesQueryParameters,
    key: any
  ) {
    const value = getProperty(queryParameters, key);
    if (Array.isArray(value)) {
      let valueString;
      switch (value[0]) {
        case 'equal to':
          valueString = value[1];
          break;
        case 'starts with':
          valueString = value + '*';
          break;
        case 'contains':
          valueString = '*' + value + '*';
          break;
        case 'ends with':
          valueString = '*' + value;
          break;
        default:
          valueString = value[1];
          break;
      }
      return valueString;
    }
    return value[1];
  }

  /**
   * Utility method used to prepare the query request url
   * @param service the DWR Surface Water service to hit
   * @param config DWR Surface Water service request config
   */
  private prepareUrl(
    service: string,
    config: surfaceWaterStationsConfig | surfaceWaterStationDataTypesConfig
  ) {
    let baseUrl = `https://dwr.state.co.us/Rest/GET/api/v2/surfacewater/${service}/?format=json`;
    const keys = Object.keys(config.queryParameters);
    const params = keys.map((key: any) => {
      return `&${key}=${this.setQueryValue(config.queryParameters, key)}`;
    });
    baseUrl += params.join('');
    return baseUrl;
  }

  /**
   * Method used to hit the DWR Surface Water Stations service
   * more information can be found at
   * https://dwr.state.co.us/Rest/GET/Help/Api/GET-api-v2-surfacewater-surfacewaterstations
   * @param config DWR Surface Water Stations service request config
   */
  public async getSurfaceWaterStations(config: surfaceWaterStationsConfig) {
    const url = this.prepareUrl('surfacewaterstations', config);
    // validateRequiredParameters(config.queryParameters);
    try {
      const data = await axios.get(url).then((result: any) => {
        return result.data.ResultList;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Method used to hit the DWR
   * Surface Water Station Data Types service
   * more information can be found at
   * https://dwr.state.co.us/Rest/GET/Help/Api/GET-api-v2-surfacewater-surfacewaterstationdatatypes
   * @param config DWR Surface Water Station Data Types service request config
   */
  public async getSurfaceWaterStationDataTypes(
    config: surfaceWaterStationDataTypesConfig
  ) {
    const url = this.prepareUrl('surfacewaterstationdatatypes', config);
    // validateRequiredParameters(config.queryParameters);
    try {
      const data = await axios.get(url).then((result: any) => {
        return result.data.ResultList;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default SurfaceWater;
