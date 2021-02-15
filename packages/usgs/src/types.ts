import Ajv from 'ajv';

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export type Services = 'instantaneous' | 'daily' | 'sites';
export type Format = 'raw' | 'time-series' | 'time-series-geojson';

export interface queryParameters {
  [key: string]: string | undefined;
  site?: string;
  sites?: string;
  stateCd?: string;
  huc?: string;
  bBox?: string;
  countyCd?: string;
  startDT?: string;
  endDT?: string;
  period?: string;
  siteStatus?: string;
  parameterCd?: string;
}

export interface usgsConfig {
  format: Format;
  queryParameters: queryParameters;
}

export interface usgsFetchOptions {
  format: Format;
  groupByField?: string;
  collapseMethods?: boolean;
}

export interface usgsDailyService {
  validate(
    config: queryParameters
  ): boolean | Ajv.ErrorObject[] | null | undefined;
  getDailyData(config: usgsConfig): Promise<any>;
}

export interface usgsInstantaneousService {
  getInstantaneousData(config: usgsConfig): Promise<any>;
}

export interface usgsService {
  daily(): usgsDailyService;
  instantaneous(): usgsInstantaneousService;
}
