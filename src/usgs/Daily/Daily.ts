import axios from 'axios';
import { usgsConfig, usgsDailyService } from '../types';
import {
  validateRequiredParameters,
  prepareUrl,
  formatTimeSeriesData,
} from '../util';

class Daily implements usgsDailyService {
  /**
   * Fetch the data from the USGS Daily Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async getDailyData(config: usgsConfig) {
    const url = prepareUrl('daily', config.queryParameters);
    validateRequiredParameters(config.queryParameters);
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

export default Daily;
