import axios from 'axios';
import {
  usgsInstantaneousQueryParameters,
  usgsInstantaneousConfig,
  usgsInstantaneousService,
  usgsInstantaneousFetchOptions,
} from './types';
import {
  validateRequiredParameters,
  prepareUrl,
  formatTimeSeriesData,
  updateQueryParameters,
} from '../util';

class Instantaneous implements usgsInstantaneousService {
  queryParameters: usgsInstantaneousQueryParameters;

  constructor(config: usgsInstantaneousConfig) {
    this.queryParameters = config.queryParameters;
    validateRequiredParameters(config.queryParameters);
  }

  public update(
    queryParameters: usgsInstantaneousQueryParameters,
    options: usgsInstantaneousFetchOptions = { format: 'time-series' }
  ) {
    this.queryParameters = updateQueryParameters(
      this.queryParameters,
      queryParameters
    );
    return this.fetch(options);
  }

  /**
   * Fetch the data from the USGS Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async fetch(
    options: usgsInstantaneousFetchOptions = { format: 'time-series' }
  ) {
    const url = prepareUrl('instantaneous', this.queryParameters);

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

export default Instantaneous;
