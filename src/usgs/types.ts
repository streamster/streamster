export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export enum Services {
  instantaneous = 'instantaneous',
  daily = 'daily',
  sites = 'sites',
}

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

export interface Config {
  service: Services;
  queryParameters: queryParameters;
}

export interface usgsFetchOptions {
  format?: string;
  groupByField?: string;
  collapseMethods?: boolean;
}

export interface USGSService {
  service: Services;
  queryParameters: queryParameters;
  update(
    queryParameters: queryParameters,
    options?: usgsFetchOptions
  ): Promise<any>;
  fetch(options?: usgsFetchOptions): Promise<any>;
}

export interface StreamsterService {
  usgs(config: Config): USGSService;
}
