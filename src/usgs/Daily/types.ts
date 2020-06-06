export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export interface usgsDailyQueryParameters {
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

export interface usgsDailyConfig {
  queryParameters: usgsDailyQueryParameters;
}

export interface usgsDailyFetchOptions {
  format?: 'time-series' | 'raw';
  groupByField?: string;
  collapseMethods?: boolean;
}

export interface usgsDailyService {
  queryParameters: usgsDailyQueryParameters;
  update(
    queryParameters: usgsDailyQueryParameters,
    options?: usgsDailyFetchOptions
  ): Promise<any>;
  fetch(options?: usgsDailyFetchOptions): Promise<any>;
}
