import axios from 'axios';
import Ajv from 'ajv';
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

const StringOperatorsSchema = {
  oneOf: [
    { type: 'string' },
    {
      type: 'object',
      properties: {
        equal: { type: 'string' },
        contains: { type: 'string' },
        startsWith: { type: 'string' },
        endsWith: { type: 'string' },
      },
      oneOf: [
        { required: ['equal'] },
        { required: ['contains'] },
        { required: ['startsWith'] },
        { required: ['endsWith'] },
      ],
    },
  ],
};

const NumericOperatorsSchema = {
  oneOf: [
    { type: 'number' },
    {
      type: 'object',
      properties: {
        equal: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
      },
      oneOf: [
        { required: ['equal'] },
        { required: ['min'] },
        { required: ['max'] },
      ],
    },
  ],
};

/**
 * Define our schema for the query parameters that can be passed
 * to the Daily service.
 * This schema used as part of the schema validation step
 */
export const GetStationsSchema = {
  type: 'object',
  properties: {
    format: {
      type: 'string',
      enum: ['json', 'xml', 'csv', 'tsx', 'geojson'],
    },
    encoding: {
      type: 'string',
      enum: ['gzip', 'deflate'],
    },
    fields: {
      type: 'array',
      items: { type: 'string' },
    },
    abbrev: StringOperatorsSchema,
    county: StringOperatorsSchema,
    division: NumericOperatorsSchema,
    modified: { type: 'string' },
    stationName: StringOperatorsSchema,
    usgsSiteId: StringOperatorsSchema,
    waterDistrict: NumericOperatorsSchema,
    location: {
      type: 'object',
      properties: {
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        radius: { type: 'number' },
        units: { type: 'string', enum: ['feet', 'miles'] },
      },
    },
    pageSize: { type: 'number' },
    pageIndex: { type: 'number' },
    apiKey: { type: 'string' },
  },
  additionalProperties: false,
};

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
