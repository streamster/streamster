import axios from 'axios';
import Ajv from 'ajv';
import { GetStationsSchema } from './schemas';
import { prepareUrl } from '../lib/prepareUrl';
import {
  SurfaceWaterService,
  GetStationsArgs,
  Services,
  SubServices,
  GenericObject,
} from '../types';

// initialize our schema validator
const ajv = new Ajv();

class SurfaceWater implements SurfaceWaterService {
  /**
   * Validation utility that compares the provided arguments
   * against the defined schema
   * AJV makes this super easy
   * @param config provided arguments to the Daily service that
   * need to be validated
   * @returns {boolean | array} returns true if no errors and an array
   * of errors if errors encountered
   */
  public validate<T>(config: T, schema: GenericObject) {
    const valid = ajv.compile(schema);
    if (valid(config)) {
      return true;
    } else {
      return valid.errors;
    }
  }

  public prepareUrl<T>(
    service: Services,
    subService: SubServices,
    queryParameters: T
  ) {
    return prepareUrl(service, subService, queryParameters);
  }

  public async getStations(config: GetStationsArgs) {
    this.validate(config.queryParameters, GetStationsSchema);
    const finalQueryParameters = {
      format: 'json',
      dateFormat: 'spaceSeparated',
      encoding: 'gzip',
      ...config.queryParameters,
    };
    const format = config?.format || 'pretty';
    const url = this.prepareUrl(
      'surfacewater',
      'surfacewaterstations',
      finalQueryParameters
    );
    try {
      const data = await axios.get(url).then((result: any) => {
        if (format === 'pretty') {
          return result.data.ResultList;
        }
        return result.data;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default SurfaceWater;
