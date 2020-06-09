export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export interface usgsInstantaneousQueryParameters {
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

export interface usgsInstantaneousConfig {
  queryParameters: usgsInstantaneousQueryParameters;
}

export interface usgsInstantaneousFetchOptions {
  format?: 'time-series' | 'raw';
  groupByField?: string;
  collapseMethods?: boolean;
}

export interface usgsInstantaneousService {
  queryParameters: usgsInstantaneousQueryParameters;
  update(
    queryParameters: usgsInstantaneousQueryParameters,
    options?: usgsInstantaneousFetchOptions
  ): Promise<any>;
  fetch(options?: usgsInstantaneousFetchOptions): Promise<any>;
}
