export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

export interface avalancheZonesService {
  getZone(): Promise<any>; // TODO
  getZones(): Promise<any>;
  getZonesWithForecast(): Promise<any>; // TODO
}

export interface avalancheService {
  zones(): avalancheZonesService;
}
