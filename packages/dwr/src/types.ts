import { ErrorObject } from 'ajv';
export type GenericObject = { [key: string]: any };
export type StreamsterFormats = 'raw' | 'pretty';
export type Services = 'surfacewater';
export type SubServices =
  | 'surfacewaterstations'
  | 'surfacewaterstationdatatypes'
  | 'surfacewatertsday'
  | 'surfacewatertsmonth';
export type BaseFormats = 'json' | 'xml' | 'csv' | 'tsv';
export type AdvancedFormats = BaseFormats | 'geojson';
export type Encodings = 'gzip' | 'deflate';

export type StringOperators = 'equal' | 'contains' | 'startsWith' | 'endsWith';
export type NumericOperators = 'equal' | 'min' | 'max';
export type DateOperators = 'equal' | 'min' | 'max';
export interface LocationSearch {
  latitude: number;
  longitude: number;
  radius: number;
  units: 'feet' | 'miles';
}

export type QueryParameter<T> =
  | T
  | {
      [key in StringOperators]?: T;
    }
  | {
      [key in NumericOperators]?: T;
    }
  | {
      [key in DateOperators]?: T;
    }
  | LocationSearch;

export interface GetStationQueryParameters {
  format?: AdvancedFormats;
  encoding?: Encodings;
  dateFormat?: string;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  county?: QueryParameter<string>;
  division?: QueryParameter<number>;
  modified?: string;
  stationName?: QueryParameter<string>;
  usgsSiteId?: QueryParameter<string>;
  waterDistrict?: QueryParameter<number>;
  location?: {
    latitude: number;
    longitude: number;
    radius: number;
    units: 'feet' | 'miles';
  };
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
}

export interface GetStationDataTypesQueryParameters {
  format?: AdvancedFormats;
  encoding?: Encodings;
  dateFormat?: string;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  county?: QueryParameter<string>;
  division?: QueryParameter<number>;
  measType?: QueryParameter<string>;
  porLastModified?: string;
  stationName?: QueryParameter<string>;
  usgsSiteId?: QueryParameter<string>;
  waterDistrict?: QueryParameter<number>;
  location?: {
    latitude: number;
    longitude: number;
    radius: number;
    units: 'feet' | 'miles';
  };
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
}

export interface GetDayTimeSeriesQueryParameters {
  format?: BaseFormats;
  encoding?: Encodings;
  dateFormat?: string;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  measDate?: QueryParameter<string>;
  measType?: QueryParameter<string>;
  modified?: string;
  stationNum: QueryParameter<number>;
  usgsSiteId?: QueryParameter<string>;
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
}

export interface GetMonthTimeSeriesQueryParameters {
  format?: BaseFormats;
  encoding?: Encodings;
  dateFormat?: string;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  calYear?: QueryParameter<number>;
  measType?: QueryParameter<string>;
  modified?: string;
  stationNum?: QueryParameter<number>;
  usgsSiteId?: QueryParameter<string>;
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
}

export interface GetStationsArgs {
  format?: StreamsterFormats;
  queryParameters?: GetStationQueryParameters;
}

export interface GetStationDataTypesArgs {
  format?: StreamsterFormats;
  queryParameters?: GetStationDataTypesQueryParameters;
}

export interface GetDayTimeSeriesArgs {
  format?: StreamsterFormats;
  queryParameters?: GetDayTimeSeriesQueryParameters;
}

export interface GetMonthTimeSeriesArgs {
  format?: StreamsterFormats;
  queryParameters?: GetMonthTimeSeriesQueryParameters;
}

export interface SurfaceWaterService {
  validate<T>(
    queryParameters: T,
    schema: GenericObject
  ):
    | boolean
    | ErrorObject<string, Record<string, any>, unknown>[]
    | null
    | undefined;
  prepareUrl<T>(
    service: Services,
    subService: SubServices,
    queryParameters: T
  ): string;
  getStations(config: GetStationsArgs): Promise<any>;
  getStationDataTypes(config: GetStationDataTypesArgs): Promise<any>;
  getDayTimeSeries(config: GetDayTimeSeriesArgs): Promise<any>;
  getMonthTimeSeries(config: GetMonthTimeSeriesArgs): Promise<any>;
}

export interface DwrService {
  surfaceWater(): SurfaceWaterService;
}
