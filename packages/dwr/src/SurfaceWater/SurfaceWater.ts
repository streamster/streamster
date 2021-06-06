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

  private async fetchData(url: string, format: StreamsterFormats = 'pretty') {
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

  public async getStations(config: QueryArgs<GetStationQueryParameters>) {
    const { url } = this.setRequest({
      queryParameters: config.queryParameters,
      schema: GetStationsSchema,
      subService: 'surfacewaterstations',
    });
    const data = await this.fetchData(url, config?.format);
    return data;
  }

  public async getStationDataTypes(
    config: QueryArgs<GetStationDataTypesQueryParameters>
  ) {
    const { url } = this.setRequest({
      queryParameters: config.queryParameters,
      schema: GetStationDataTypesSchema,
      subService: 'surfacewaterstationdatatypes',
    });
    const data = await this.fetchData(url, config?.format);
    return data;
  }

  public async getDayTimeSeries(
    config: QueryArgs<GetDayTimeSeriesQueryParameters>
  ) {
    const { url } = this.setRequest({
      queryParameters: config.queryParameters,
      schema: GetDayTimeSeriesSchema,
      subService: 'surfacewatertsday',
    });
    const data = await this.fetchData(url, config?.format);
    return data;
  }

  public async getMonthTimeSeries(
    config: QueryArgs<GetMonthTimeSeriesQueryParameters>
  ) {
    const { url } = this.setRequest({
      queryParameters: config.queryParameters,
      schema: GetMonthTimeSeriesSchema,
      subService: 'surfacewatertsmonth',
    });
    const data = await this.fetchData(url, config?.format);
    return data;
  }
}

export default SurfaceWater;
