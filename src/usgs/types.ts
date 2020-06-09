import { usgsDailyConfig, usgsDailyService } from './Daily/types';
import {
  usgsInstantaneousConfig,
  usgsInstantaneousService,
} from './instantaneous/types';

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export type Services = 'instantaneous' | 'daily' | 'sites';

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

export interface usgsService {
  daily(config: usgsDailyConfig): usgsDailyService;
  daily(config: usgsInstantaneousConfig): usgsInstantaneousService;
}
