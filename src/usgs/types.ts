export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
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
  service: 'instantaneous' | 'daily' | 'sites';
  queryParameters: queryParameters;
}

export interface usgsFetchOptions {
  format?: string;
  groupByField?: string;
  collapseMethods?: boolean;
}

export interface USGSService {
  service: 'instantaneous' | 'daily' | 'sites';
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
