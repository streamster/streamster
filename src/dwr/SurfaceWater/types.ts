export interface dwrSurfaceWaterService {
  getSurfaceWaterStations(config: surfaceWaterStationsConfig): Promise<any>;
}

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export type Formats = 'json' | 'xml' | 'csv' | 'geojson';
export type StringOperators =
  | 'equal to'
  | 'starts with'
  | 'contains'
  | 'ends with';
export type NumberOperators = 'equal to' | 'less than' | 'greater than';
export type StringFilter = string | [StringOperators, string];
export type NumberFilter = number | [NumberOperators, number];
export type GeographyFilter = [number, number, number, 'miles' | 'feet'];

export interface surfaceWaterStationsQueryParameters {
  abbrev?: StringFilter;
  county?: StringFilter;
  division?: NumberFilter;
  modified?: Date;
  stationName?: StringFilter;
  usgsSiteId?: StringFilter;
  waterDistrict?: NumberFilter;
  locationSearch?: GeographyFilter;
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
}

export interface surfaceWaterStationsConfig {
  format?: Formats;
  queryParameters: surfaceWaterStationsQueryParameters;
}
