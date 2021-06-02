export type Services = 'surfacewater';
export type SubServices = 'surfacewaterstations';
export type Formats = 'json' | 'xml' | 'csv' | 'tsx' | 'geojson';
export type Encodings = 'gzip' | 'deflate';

export type StringOperators = 'equal' | 'contains' | 'startsWith' | 'endsWith';
export type NumericOperators = 'equal' | 'min' | 'max';
export interface LocationSearch {
  latitude: Number;
  longitude: Number;
  radius: Number;
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
  format: Formats;
  encoding?: Encodings;
  fields?: string[];
  abbrev?: QueryParameter<String>;
  county?: QueryParameter<String>;
  division?: QueryParameter<Number>;
  modified?: {
    date: string;
    time: string;
  };
  stationName?: QueryParameter<String>;
  usgsSiteId?: QueryParameter<String>;
  waterDistrict?: QueryParameter<Number>;
  location?: {
    latitude: Number;
    longitude: Number;
    radius: Number;
    units: 'feet' | 'miles';
  };
  pageSize?: Number;
  pageIndex?: Number;
  apiKey?: string;
}

export interface GetStationsArgs {
  format: 'raw';
  queryParameters: GetStationQueryParameters;
}

export interface SurfaceWaterService {
  prepareUrl<T>(
    service: Services,
    subService: SubServices,
    queryParameters: T
  ): string;
  getStations(config: GetStationsArgs): Promise<any>;
}

export interface DwrService {
  surfaceWater(): SurfaceWaterService;
}
