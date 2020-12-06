import axios from 'axios';
import Ajv from 'ajv';
import { queryParameters, usgsConfig, usgsDailyService } from '../types';
import { prepareUrl, formatTimeSeriesData } from '../util';

const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    site: { type: 'string' },
    sites: { type: 'string' },
    stateCd: { type: 'string' },
    huc: { type: 'string' },
    bBox: { type: 'string' },
    countyCd: { type: 'string' },
    startDT: { type: 'string' },
    endDT: { type: 'string' },
    period: { type: 'string' },
    siteStatus: { type: 'string' },
    parameterCd: { type: 'string' },
  },
  oneOf: [
    { required: ['site'] },
    { required: ['sites'] },
    { required: ['stateCd'] },
    { required: ['huc'] },
    { required: ['bBox'] },
    { required: ['countyCd'] },
  ],
  additionalProperties: false,
};

class Daily implements usgsDailyService {
  public validate(config: queryParameters) {
    const valid = ajv.compile(schema);
    if (valid(config)) {
      return true;
    } else {
      return valid.errors;
    }
  }

  /**
   * Fetch the data from the USGS Daily Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async getDailyData(config: usgsConfig) {
    const url = prepareUrl('daily', config.queryParameters);
    this.validate(config.queryParameters);
    // validateRequiredParameters(config.queryParameters);
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
