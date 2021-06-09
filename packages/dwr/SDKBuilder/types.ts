import { ErrorObject } from 'ajv';
export type GenericObject = { [key: string]: any };
export type StreamsterFormats = 'raw' | 'pretty';
export type BaseFormats = 'json' | 'xml' | 'csv' | 'tsv';
export type AdvancedFormats = BaseFormats | 'geojson';
export type Encodings = 'gzip' | 'deflate';

export type StringOperators = 'equal' | 'contains' | 'startsWith' | 'endsWith';
export type NumericOperators = 'equal' | 'min' | 'max';
export type DateOperators = 'equal' | 'min' | 'max';
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
  | {
      [key in DateOperators]?: T;
    };

export interface QueryArgs<T> {
  format?: StreamsterFormats;
  queryParameters: T;
}

export interface SetRequestArgs<T> {
  queryParameters: T;
  schema: GenericObject;
  subService: SubServices;
}

export type Services =
  | 'administrativecalls'
  | 'analysisservices'
  | 'climatedata'
  | 'damsafety'
  | 'structures'
  | 'groundwater'
  | 'groundwater'
  | 'structures'
  | 'referencetables'
  | 'structures'
  | 'surfacewater'
  | 'telemetrystations'
  | 'waterrights'
  | 'wellpermits';

export type SubServices =
  | 'active'
  | 'historical'
  | 'watersourcerouteanalysis'
  | 'watersourcerouteframework'
  | 'callanalysisbywdid'
  | 'callanalysisbygnisid'
  | 'climatestations'
  | 'climatestationsdatatypes'
  | 'climatestationtsday'
  | 'climatestationtsmonth'
  | 'climatestationfrostdates'
  | 'damsafetydaminfojd'
  | 'damsafetydaminfonjd'
  | 'damsafetydaminfolswtecd'
  | 'divrec'
  | 'divrec'
  | 'divrec'
  | 'divrec'
  | 'divrec'
  | 'divrec'
  | 'geophysicallogs'
  | 'geophysicallogs'
  | 'waterlevels'
  | 'waterlevels'
  | 'parcelusets'
  | 'county'
  | 'designatedbasin'
  | 'groundwaterpublication'
  | 'managementdistrict'
  | 'permitactionname'
  | 'waterdistrict'
  | 'waterdivision'
  | 'telemetryparams'
  | 'climatestationmeastype'
  | 'currentinusecodes'
  | 'divrecobservationcodes'
  | 'divrectypes'
  | 'diversionnotusedcodes'
  | 'stationflags'
  | 'undefined'
  | 'surfacewaterstations'
  | 'surfacewaterstationdatatypes'
  | 'surfacewatertsday'
  | 'surfacewatertsmonth'
  | 'surfacewatertswateryear'
  | 'telemetrystation'
  | 'telemetrystationdatatypes'
  | 'telemetrytimeseriesraw'
  | 'telemetrytimeserieshour'
  | 'telemetrytimeseriesday'
  | 'telemetryshiftadjustedratingtable'
  | 'telemetrydecodesettings'
  | 'telemetryratingtable'
  | 'telemetryshiftcurve'
  | 'telemetrydischargemeasurement'
  | 'netamount'
  | 'transaction'
  | 'wellpermit'
  | 'wellpermitactionhistory';

export interface GetSurfaceWaterTimeSeriesDayQueryParameters {
  format?: BaseFormats;
  encoding?: Encodings;
  dateFormat?: string;
  fields?: string[];
  abbrev?: QueryParameter<string>;
  measDate?: QueryParameter<string>;
  measType?: QueryParameter<string>;
  modified?: QueryParameter<string>;
  stationNum?: QueryParameter<number>;
  usgsSiteId?: QueryParameter<string>;
  pageSize?: number;
  pageIndex?: number;
  apiKey?: string;
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
  getSurfaceWaterTimeSeriesDay(
    config: QueryArgs<GetSurfaceWaterTimeSeriesDayQueryParameters>
  ): Promise<any>;
}

export interface DwrService {
  surfaceWater(): SurfaceWaterService;
}
