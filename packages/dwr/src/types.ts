import { ErrorObject } from 'ajv';
export type GenericObject = { [key: string]: any };
export type StreamsterFormats = 'raw' | 'pretty';
export type Services = 'surfacewater';
export type SubServices =
  | 'surfacewaterstations'
  | 'surfacewaterstationdatatypes';
export type Formats = 'json' | 'xml' | 'csv' | 'tsx' | 'geojson';
export type Encodings = 'gzip' | 'deflate';

export type StringOperators = 'equal' | 'contains' | 'startsWith' | 'endsWith';
export type NumericOperators = 'equal' | 'min' | 'max';
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
  | LocationSearch;

export interface GetStationQueryParameters {
  format?: Formats;
  encoding?: Encodings;
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
  format?: Formats;
  encoding?: Encodings;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  county?: QueryParameter<string>;
  division?: QueryParameter<number>;
  measType?: QueryParameter<string>;
  porLastmodified?: string;
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

export interface GetStationsArgs {
  format?: StreamsterFormats;
  queryParameters?: GetStationQueryParameters;
}

export interface GetStationDataTypesArgs {
  format?: StreamsterFormats;
  queryParameters?: GetStationDataTypesQueryParameters;
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
}

export interface DwrService {
  surfaceWater(): SurfaceWaterService;
}
