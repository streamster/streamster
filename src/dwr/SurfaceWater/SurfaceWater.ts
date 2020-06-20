import axios from 'axios';
import {
  dwrSurfaceWaterService,
  surfaceWaterStationsConfig,
  surfaceWaterStationsQueryParameters,
  getProperty,
} from './types';

class SurfaceWater implements dwrSurfaceWaterService {
  private setQueryValue(data: surfaceWaterStationsQueryParameters, key: any) {
    const value = getProperty(data, key);
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

  private prepareUrl(service: string, config: surfaceWaterStationsConfig) {
    let baseUrl = `https://dwr.state.co.us/Rest/GET/api/v2/surfacewater/${service}/?format=json`;
    const keys = Object.keys(config.queryParameters);
    const params = keys.map((key: any) => {
      return `&${key}=${this.setQueryValue(config.queryParameters, key)}`;
    });
    baseUrl += params.join('');
    return baseUrl;
  }

  public async getSurfaceWaterStations(config: surfaceWaterStationsConfig) {
    const url = this.prepareUrl('surfacewaterstations', config);
    // validateRequiredParameters(config.queryParameters);
    try {
      const data = await axios.get(url).then((result: any) => {
        return result.data;
        // if (config.format === 'raw') {
        //   return result.data;
        // }
        // return formatTimeSeriesData(result.data);
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default SurfaceWater;
