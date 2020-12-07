import axios from 'axios';
import Ajv from 'ajv';
import {
  queryParameters,
  usgsConfig,
  usgsInstantaneousService,
} from '../types';
import prepareUrl from '../lib/prepareUrl';
import formatTimeSeries from '../lib/formatTimeSeries';

const ajv = new Ajv();

const queryParamsSchema = {
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

class Instantaneous implements usgsInstantaneousService {
  public validate(config: queryParameters) {
    const valid = ajv.compile(queryParamsSchema);
    if (valid(config)) {
      return true;
    } else {
      return valid.errors;
    }
  }

  /**
   * Fetch the data from the USGS Service based on the configuration options
   * provided by the user
   * @param options
   */
  public async getInstantaneousData(config: usgsConfig) {
    this.validate(config.queryParameters);
    const url = prepareUrl('instantaneous', config.queryParameters);

    try {
      const data = await axios.get(url).then((result: any) => {
        if (config.format === 'raw') {
          return result.data;
        }
        return formatTimeSeries(result.data);
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default Instantaneous;
