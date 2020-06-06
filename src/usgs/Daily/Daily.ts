import axios from 'axios';
import {
  usgsDailyQueryParameters,
  usgsDailyConfig,
  usgsDailyService,
  usgsDailyFetchOptions,
} from './types';
import {
  validateRequiredParameters,
  prepareUrl,
  formatTimeSeriesData,
  updateQueryParameters,
} from '../util';

class Daily implements usgsDailyService {
  queryParameters: usgsDailyQueryParameters;

  constructor(config: usgsDailyConfig) {
    this.queryParameters = config.queryParameters;
    validateRequiredParameters(config.queryParameters);
  }

  public update(
    queryParameters: usgsDailyQueryParameters,
    options: usgsDailyFetchOptions = { format: 'time-series' }
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
  public async fetch(
    options: usgsDailyFetchOptions = { format: 'time-series' }
  ) {
    const url = prepareUrl('daily', this.queryParameters);

    try {
      const data = await axios.get(url).then((result: any) => {
        if (options.format === 'raw') {
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
