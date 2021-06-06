import axios from 'axios';
import Ajv from 'ajv';
import {
  GetStationsSchema,
  GetStationDataTypesSchema,
  GetDayTimeSeriesSchema,
  GetMonthTimeSeriesSchema,
} from './schemas';
import { prepareUrl } from '../lib/prepareUrl';
import {
  SurfaceWaterService,
  Services,
  SubServices,
  GenericObject,
  QueryArgs,
  GetStationQueryParameters,
  GetDayTimeSeriesQueryParameters,
  GetStationDataTypesQueryParameters,
  GetMonthTimeSeriesQueryParameters,
  StreamsterFormats,
  SetRequestArgs,
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

  private setQueryParameters<T>(queryParameters: T) {
    return {
      format: 'json',
      dateFormat: 'spaceSeparated',
      encoding: 'gzip',
      ...queryParameters,
    };
  }

  private setRequest<T>({
    queryParameters,
    schema,
    subService,
  }: SetRequestArgs<T>) {
    this.validate(queryParameters, schema);
    const finalQueryParameters = this.setQueryParameters(queryParameters);
    const url = this.prepareUrl(
      'surfacewater',
      subService,
      finalQueryParameters
    );
    return {
      url,
    };
  }

  private async fetchData<T>({
    queryParameters,
    schema,
    format,
    subService,
  }: {
    queryParameters: T;
    schema: GenericObject;
    format?: StreamsterFormats;
    subService: SubServices;
  }) {
    const { url } = this.setRequest({
      queryParameters: queryParameters,
      schema: schema,
      subService: subService,
    });
    const finalFormat = format || 'pretty';
    try {
      const data = await axios.get(url).then((result: any) => {
        if (finalFormat === 'pretty') {
          return result.data.ResultList;
        }
        return result.data;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  public async getStations(config: QueryArgs<GetStationQueryParameters>) {
    const data = await this.fetchData({
      schema: GetStationsSchema,
      format: config.format,
      queryParameters: config.queryParameters,
      subService: 'surfacewaterstations',
    });
    return data;
  }

  public async getStationDataTypes(
    config: QueryArgs<GetStationDataTypesQueryParameters>
  ) {
    const data = await this.fetchData({
      schema: GetStationDataTypesSchema,
      format: config.format,
      queryParameters: config.queryParameters,
      subService: 'surfacewaterstationdatatypes',
    });
    return data;
  }

  public async getDayTimeSeries(
    config: QueryArgs<GetDayTimeSeriesQueryParameters>
  ) {
    const data = await this.fetchData({
      schema: GetDayTimeSeriesSchema,
      format: config.format,
      queryParameters: config.queryParameters,
      subService: 'surfacewatertsday',
    });
    return data;
  }

  public async getMonthTimeSeries(
    config: QueryArgs<GetMonthTimeSeriesQueryParameters>
  ) {
    const data = await this.fetchData({
      schema: GetMonthTimeSeriesSchema,
      format: config.format,
      queryParameters: config.queryParameters,
      subService: 'surfacewatertsmonth',
    });
    return data;
  }
}

export default SurfaceWater;
