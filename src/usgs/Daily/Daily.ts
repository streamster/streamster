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
  formatGroupedTimeSeriesData,
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
    options: usgsDailyFetchOptions = { format: 'default' }
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
  public async fetch(options: usgsDailyFetchOptions = { format: 'default' }) {
    const url = prepareUrl('daily', this.queryParameters);

    try {
      const data = await axios.get(url).then((result: any) => {
        if (options.format === 'default') {
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

export default Daily;
