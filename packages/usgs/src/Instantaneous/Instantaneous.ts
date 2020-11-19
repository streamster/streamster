import axios from 'axios';
import { usgsConfig, usgsInstantaneousService } from '../types';
import {
  validateRequiredParameters,
  prepareUrl,
  formatTimeSeriesData,
} from '../util';

class Instantaneous implements usgsInstantaneousService {
  /**
   * Fetch the data from the USGS Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async getInstantaneousData(config: usgsConfig) {
    validateRequiredParameters(config.queryParameters);
    const url = prepareUrl('instantaneous', config.queryParameters);

    try {
      const data = await axios.get(url).then((result: any) => {
        if (config.format === 'raw') {
          return result.data;
        }
        return formatTimeSeriesData(result.data);
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default Instantaneous;
