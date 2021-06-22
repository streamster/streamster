import { ErrorObject } from "ajv";
export type GenericObject = { [key: string]: any };
export type StreamsterFormats = "raw" | "pretty";
export type BaseFormats = "json" | "xml" | "csv" | "tsv";
export type AdvancedFormats = BaseFormats | "geojson";
export type Encodings = "gzip" | "deflate";

export type StringOperators = "equal" | "contains" | "startsWith" | "endsWith";
export type NumericOperators = "equal" | "min" | "max";
export type DateOperators = "equal" | "min" | "max";
export interface LocationSearch {
  latitude: number;
  longitude: number;
  radius: number;
  units: "feet" | "miles";
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

export type Services = 'administrativecalls' | 'analysisservices' | 'climatedata' | 'damsafety' | 'structures' | 'groundwater' | 'groundwater' | 'structures' | 'referencetables' | 'structures' | 'surfacewater' | 'telemetrystations' | 'waterrights' | 'wellpermits'

export type SubServices = 'active' | 'historical' | 'watersourcerouteanalysis' | 'watersourcerouteframework' | 'callanalysisbywdid' | 'callanalysisbygnisid' | 'climatestations' | 'climatestationsdatatypes' | 'climatestationtsday' | 'climatestationtsmonth' | 'climatestationfrostdates' | 'damsafetydaminfojd' | 'damsafetydaminfonjd' | 'damsafetydaminfolswtecd' | 'divrec' | 'divrec' | 'divrec' | 'divrec' | 'divrec' | 'divrec' | 'geophysicallogs' | 'geophysicallogs' | 'waterlevels' | 'waterlevels' | 'parcelusets' | 'county' | 'designatedbasin' | 'groundwaterpublication' | 'managementdistrict' | 'permitactionname' | 'waterdistrict' | 'waterdivision' | 'telemetryparams' | 'climatestationmeastype' | 'currentinusecodes' | 'divrecobservationcodes' | 'divrectypes' | 'diversionnotusedcodes' | 'stationflags' | 'undefined' | 'surfacewaterstations' | 'surfacewaterstationdatatypes' | 'surfacewatertsday' | 'surfacewatertsmonth' | 'surfacewatertswateryear' | 'telemetrystation' | 'telemetrystationdatatypes' | 'telemetrytimeseriesraw' | 'telemetrytimeserieshour' | 'telemetrytimeseriesday' | 'telemetryshiftadjustedratingtable' | 'telemetrydecodesettings' | 'telemetryratingtable' | 'telemetryshiftcurve' | 'telemetrydischargemeasurement' | 'netamount' | 'transaction' | 'wellpermit' | 'wellpermitactionhistory'

export interface GetActiveAdministrativeCallsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	callNumber?: QueryParameter<number>;
	dateTimeSet?: QueryParameter<string>;
	division?: QueryParameter<number>;
	locationWdid?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	waterSourceName?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetHistoricalAdministrativeCallsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	callNumber?: QueryParameter<number>;
	dateTimeSet?: QueryParameter<string>;
	division?: QueryParameter<number>;
	locationWdid?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	waterSourceName?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterSourceRouteAnalysisInfoQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	ltGnisId?: QueryParameter<string>;
	ltStreamMile?: QueryParameter<string>;
	utGnisId?: QueryParameter<string>;
	utStreamMile?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterSourceRouteFrameworkInfoQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	division?: QueryParameter<number>;
	gnisName?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetCallAnalysisStructureInfoQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	adminNo?: QueryParameter<string>;
	endDate?: QueryParameter<string>;
	startDate?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetCallAnalysisStreamMileInfoQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	adminNo?: QueryParameter<string>;
	endDate?: QueryParameter<string>;
	gnisId?: QueryParameter<string>;
	startDate?: QueryParameter<string>;
	streamMile?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	siteId?: QueryParameter<string>;
	stationName?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationDataTypesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	measType?: QueryParameter<string>;
	porLastModified?: QueryParameter<string>;
	siteId?: QueryParameter<string>;
	stationName?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationTimeSeriesDayQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	measDate?: QueryParameter<string>;
	measType?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	siteId?: QueryParameter<string>;
	stationNum?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationTimeSeriesMonthQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	calYear?: QueryParameter<number>;
	measType?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	siteId?: QueryParameter<string>;
	stationNum?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationFrostDatesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	calYear?: QueryParameter<number>;
	stationNum?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetJurisdictionalDamsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	damId?: QueryParameter<string>;
	division?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetNonJurisdictionalDamsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	damId?: QueryParameter<string>;
	division?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetLivestockandErosionControlQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	receipt?: QueryParameter<number>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterClassesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	ciuCode?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	divrectype?: QueryParameter<string>;
	gnisId?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	porEnd?: QueryParameter<string>;
	porLastModified?: QueryParameter<string>;
	porStart?: QueryParameter<string>;
	structureName?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	waterSource?: QueryParameter<string>;
	wcIdentifier?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordCommentsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	irrYear?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordStageVolumesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	dataMeasDate?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordsByDayQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	approvalStatus?: QueryParameter<string>;
	dataMeasDate?: QueryParameter<string>;
	dataValue?: QueryParameter<number>;
	measInterval?: QueryParameter<string>;
	measUnits?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	obsCode?: QueryParameter<string>;
	waterClassNum?: QueryParameter<number>;
	wcIdentifier?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordsByMonthQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	approvalStatus?: QueryParameter<string>;
	dataMeasDate?: QueryParameter<string>;
	dataValue?: QueryParameter<number>;
	measCount?: QueryParameter<number>;
	measInterval?: QueryParameter<string>;
	measUnits?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	obsCode?: QueryParameter<string>;
	waterClassNum?: QueryParameter<number>;
	wcIdentifier?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordsByYearQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	approvalStatus?: QueryParameter<string>;
	dataMeasDate?: QueryParameter<string>;
	dataValue?: QueryParameter<number>;
	measCount?: QueryParameter<number>;
	measInterval?: QueryParameter<string>;
	measUnits?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	obsCode?: QueryParameter<string>;
	waterClassNum?: QueryParameter<number>;
	wcIdentifier?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWellSitesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	designatedBasin?: QueryParameter<string>;
	division?: QueryParameter<number>;
	managementDistrict?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	wellId?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetGeophysicalLogpicksQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	modified?: QueryParameter<string>;
	wellId?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWellSitesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	designatedBasin?: QueryParameter<string>;
	division?: QueryParameter<number>;
	managementDistrict?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	porEnd?: QueryParameter<string>;
	porStart?: QueryParameter<string>;
	publicationName?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	wellId?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWellMeasurementsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	measurementDate?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	wellId?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetParcelUseTimeSeriesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	calYear?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetColoradoCountiesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDesignatedBasinsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	designatedBasinName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetGroundwaterPublicationsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	publicationName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetManagementDistrictsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	managementDistrictName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetPermitActionNamesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	actionName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterDistrictsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	division?: QueryParameter<number>;
	waterDistrict?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterDivisionsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	division?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryParametersQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	parameter?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetClimateStationMeasurementTypesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	measType?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetCurrentInUseCodesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	ciuCode?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordObservationCodesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	obsCode?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionRecordTypesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	divRecType?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetDiversionNotUsedCodesQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	notUsedCode?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetStationFlagsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	dataSource?: QueryParameter<string>;
	description?: QueryParameter<string>;
	flag?: QueryParameter<string>;
	flagColumn?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetAdministrativeStructuresQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	ciuCode?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	gnisId?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	porEnd?: QueryParameter<string>;
	porStart?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	waterSource?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetSurfaceWaterStationsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	modified?: QueryParameter<string>;
	stationName?: QueryParameter<string>;
	usgsSiteId?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetSurfaceWaterStationDataTypesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	measType?: QueryParameter<string>;
	porLastModified?: QueryParameter<string>;
	stationName?: QueryParameter<string>;
	usgsSiteId?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

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

export interface GetSurfaceWaterTimeSeriesMonthQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	calYear?: QueryParameter<number>;
	measType?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	stationNum?: QueryParameter<number>;
	usgsSiteId?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetSurfaceWaterTimeSeriesWaterYearQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	measType?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	stationNum?: QueryParameter<number>;
	usgsSiteId?: QueryParameter<string>;
	waterYear?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryStationsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	gnisId?: QueryParameter<string>;
	includeHistoric?: QueryParameter<boolean>;
	includeThirdParty?: QueryParameter<boolean>;
	modified?: QueryParameter<string>;
	stationPorEnd?: QueryParameter<string>;
	stationPorStart?: QueryParameter<string>;
	stationType?: QueryParameter<string>;
	usgsStationId?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	waterSource?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryStationsDataTypesQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	gnisId?: QueryParameter<string>;
	includeHistoric?: QueryParameter<boolean>;
	includeThirdParty?: QueryParameter<boolean>;
	modified?: QueryParameter<string>;
	parameter?: QueryParameter<string>;
	parameterPorEnd?: QueryParameter<string>;
	parameterPorStart?: QueryParameter<string>;
	stationType?: QueryParameter<string>;
	usgsStationId?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	waterSource?: QueryParameter<string>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryTimeSeriesRawQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	endDate?: QueryParameter<string>;
	includeThirdParty?: QueryParameter<boolean>;
	modified?: QueryParameter<string>;
	parameter?: QueryParameter<string>;
	startDate?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryTimeSeriesHourQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	endDate?: QueryParameter<string>;
	includeThirdParty?: QueryParameter<boolean>;
	modified?: QueryParameter<string>;
	parameter?: QueryParameter<string>;
	startDate?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryTimeSeriesDayQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	endDate?: QueryParameter<string>;
	includeThirdParty?: QueryParameter<boolean>;
	modified?: QueryParameter<string>;
	offset?: QueryParameter<string>;
	parameter?: QueryParameter<string>;
	startDate?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryShiftAdjustedRatingTableQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	parameter?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryDecodeSettingsQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	rating_start_date?: QueryParameter<string>;
	shift_start_date?: QueryParameter<string>;
	shiftcurve_start_date?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryRatingTableQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	ratingTableName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryStationsShiftCurveQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	shiftCurveName?: QueryParameter<string>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetTelemetryStationsDischargeMeasurementSummaryQueryParameters {
	format?: BaseFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	abbrev?: QueryParameter<string>;
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	measDateTime?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterRightsNetAmountsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	lastModified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWaterRightsTransactionsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	division?: QueryParameter<number>;
	lastModified?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	wdid?: QueryParameter<string>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWellPermitsQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	county?: QueryParameter<string>;
	designatedBasinName?: QueryParameter<string>;
	division?: QueryParameter<number>;
	managementDistrictName?: QueryParameter<string>;
	modified?: QueryParameter<string>;
	receipt?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface GetWellPermitActionHistoryQueryParameters {
	format?: AdvancedFormats;
	encoding?: Encodings;
	dateFormat?: string;
	fields?: string[];
	actionDate?: QueryParameter<string>;
	actionName?: QueryParameter<string>;
	county?: QueryParameter<string>;
	designatedBasinName?: QueryParameter<string>;
	division?: QueryParameter<number>;
	managementDistrictName?: QueryParameter<string>;
	receipt?: QueryParameter<string>;
	waterDistrict?: QueryParameter<number>;
	location?: QueryParameter<Location>;
	pageSize?: number;
	pageIndex?: number;
	apiKey?: string;

}

export interface AdministrativeCallsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getActiveAdministrativeCalls(config: QueryArgs<GetActiveAdministrativeCallsQueryParameters>): Promise<any>;

	getHistoricalAdministrativeCalls(config: QueryArgs<GetHistoricalAdministrativeCallsQueryParameters>): Promise<any>;

}


export interface AnalysisServicesService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWaterSourceRouteAnalysisInfo(config: QueryArgs<GetWaterSourceRouteAnalysisInfoQueryParameters>): Promise<any>;

	getWaterSourceRouteFrameworkInfo(config: QueryArgs<GetWaterSourceRouteFrameworkInfoQueryParameters>): Promise<any>;

	getCallAnalysisStructureInfo(config: QueryArgs<GetCallAnalysisStructureInfoQueryParameters>): Promise<any>;

	getCallAnalysisStreamMileInfo(config: QueryArgs<GetCallAnalysisStreamMileInfoQueryParameters>): Promise<any>;

}


export interface ClimateStationsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getClimateStations(config: QueryArgs<GetClimateStationsQueryParameters>): Promise<any>;

	getClimateStationDataTypes(config: QueryArgs<GetClimateStationDataTypesQueryParameters>): Promise<any>;

	getClimateStationTimeSeriesDay(config: QueryArgs<GetClimateStationTimeSeriesDayQueryParameters>): Promise<any>;

	getClimateStationTimeSeriesMonth(config: QueryArgs<GetClimateStationTimeSeriesMonthQueryParameters>): Promise<any>;

	getClimateStationFrostDates(config: QueryArgs<GetClimateStationFrostDatesQueryParameters>): Promise<any>;

}


export interface DamSafetyService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getJurisdictionalDams(config: QueryArgs<GetJurisdictionalDamsQueryParameters>): Promise<any>;

	getNonJurisdictionalDams(config: QueryArgs<GetNonJurisdictionalDamsQueryParameters>): Promise<any>;

	getLivestockandErosionControl(config: QueryArgs<GetLivestockandErosionControlQueryParameters>): Promise<any>;

}


export interface DiversionRecordsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWaterClasses(config: QueryArgs<GetWaterClassesQueryParameters>): Promise<any>;

	getDiversionRecordComments(config: QueryArgs<GetDiversionRecordCommentsQueryParameters>): Promise<any>;

	getDiversionRecordStageVolumes(config: QueryArgs<GetDiversionRecordStageVolumesQueryParameters>): Promise<any>;

	getDiversionRecordsByDay(config: QueryArgs<GetDiversionRecordsByDayQueryParameters>): Promise<any>;

	getDiversionRecordsByMonth(config: QueryArgs<GetDiversionRecordsByMonthQueryParameters>): Promise<any>;

	getDiversionRecordsByYear(config: QueryArgs<GetDiversionRecordsByYearQueryParameters>): Promise<any>;

}


export interface GroundwaterGeophysicalLogsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWellSites(config: QueryArgs<GetWellSitesQueryParameters>): Promise<any>;

	getGeophysicalLogpicks(config: QueryArgs<GetGeophysicalLogpicksQueryParameters>): Promise<any>;

}


export interface GroundwaterLevelsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWellSites(config: QueryArgs<GetWellSitesQueryParameters>): Promise<any>;

	getWellMeasurements(config: QueryArgs<GetWellMeasurementsQueryParameters>): Promise<any>;

}


export interface ParcelUseTSService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getParcelUseTimeSeries(config: QueryArgs<GetParcelUseTimeSeriesQueryParameters>): Promise<any>;

}


export interface ReferenceTablesService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getColoradoCounties(config: QueryArgs<GetColoradoCountiesQueryParameters>): Promise<any>;

	getDesignatedBasins(config: QueryArgs<GetDesignatedBasinsQueryParameters>): Promise<any>;

	getGroundwaterPublications(config: QueryArgs<GetGroundwaterPublicationsQueryParameters>): Promise<any>;

	getManagementDistricts(config: QueryArgs<GetManagementDistrictsQueryParameters>): Promise<any>;

	getPermitActionNames(config: QueryArgs<GetPermitActionNamesQueryParameters>): Promise<any>;

	getWaterDistricts(config: QueryArgs<GetWaterDistrictsQueryParameters>): Promise<any>;

	getWaterDivisions(config: QueryArgs<GetWaterDivisionsQueryParameters>): Promise<any>;

	getTelemetryParameters(config: QueryArgs<GetTelemetryParametersQueryParameters>): Promise<any>;

	getClimateStationMeasurementTypes(config: QueryArgs<GetClimateStationMeasurementTypesQueryParameters>): Promise<any>;

	getCurrentInUseCodes(config: QueryArgs<GetCurrentInUseCodesQueryParameters>): Promise<any>;

	getDiversionRecordObservationCodes(config: QueryArgs<GetDiversionRecordObservationCodesQueryParameters>): Promise<any>;

	getDiversionRecordTypes(config: QueryArgs<GetDiversionRecordTypesQueryParameters>): Promise<any>;

	getDiversionNotUsedCodes(config: QueryArgs<GetDiversionNotUsedCodesQueryParameters>): Promise<any>;

	getStationFlags(config: QueryArgs<GetStationFlagsQueryParameters>): Promise<any>;

}


export interface StructuresService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getAdministrativeStructures(config: QueryArgs<GetAdministrativeStructuresQueryParameters>): Promise<any>;

}


export interface SurfaceWaterService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getSurfaceWaterStations(config: QueryArgs<GetSurfaceWaterStationsQueryParameters>): Promise<any>;

	getSurfaceWaterStationDataTypes(config: QueryArgs<GetSurfaceWaterStationDataTypesQueryParameters>): Promise<any>;

	getSurfaceWaterTimeSeriesDay(config: QueryArgs<GetSurfaceWaterTimeSeriesDayQueryParameters>): Promise<any>;

	getSurfaceWaterTimeSeriesMonth(config: QueryArgs<GetSurfaceWaterTimeSeriesMonthQueryParameters>): Promise<any>;

	getSurfaceWaterTimeSeriesWaterYear(config: QueryArgs<GetSurfaceWaterTimeSeriesWaterYearQueryParameters>): Promise<any>;

}


export interface TelemetryStationsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getTelemetryStations(config: QueryArgs<GetTelemetryStationsQueryParameters>): Promise<any>;

	getTelemetryStationsDataTypes(config: QueryArgs<GetTelemetryStationsDataTypesQueryParameters>): Promise<any>;

	getTelemetryTimeSeriesRaw(config: QueryArgs<GetTelemetryTimeSeriesRawQueryParameters>): Promise<any>;

	getTelemetryTimeSeriesHour(config: QueryArgs<GetTelemetryTimeSeriesHourQueryParameters>): Promise<any>;

	getTelemetryTimeSeriesDay(config: QueryArgs<GetTelemetryTimeSeriesDayQueryParameters>): Promise<any>;

	getTelemetryShiftAdjustedRatingTable(config: QueryArgs<GetTelemetryShiftAdjustedRatingTableQueryParameters>): Promise<any>;

	getTelemetryDecodeSettings(config: QueryArgs<GetTelemetryDecodeSettingsQueryParameters>): Promise<any>;

	getTelemetryRatingTable(config: QueryArgs<GetTelemetryRatingTableQueryParameters>): Promise<any>;

	getTelemetryStationsShiftCurve(config: QueryArgs<GetTelemetryStationsShiftCurveQueryParameters>): Promise<any>;

	getTelemetryStationsDischargeMeasurementSummary(config: QueryArgs<GetTelemetryStationsDischargeMeasurementSummaryQueryParameters>): Promise<any>;

}


export interface WaterRightsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWaterRightsNetAmounts(config: QueryArgs<GetWaterRightsNetAmountsQueryParameters>): Promise<any>;

	getWaterRightsTransactions(config: QueryArgs<GetWaterRightsTransactionsQueryParameters>): Promise<any>;

}


export interface WellPermitsService {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;

	getWellPermits(config: QueryArgs<GetWellPermitsQueryParameters>): Promise<any>;

	getWellPermitActionHistory(config: QueryArgs<GetWellPermitActionHistoryQueryParameters>): Promise<any>;

}

export interface DwrService {
	administrativeCalls(): AdministrativeCallsService;
	analysisServices(): AnalysisServicesService;
	climateStations(): ClimateStationsService;
	damSafety(): DamSafetyService;
	diversionRecords(): DiversionRecordsService;
	groundwaterGeophysicalLogs(): GroundwaterGeophysicalLogsService;
	groundwaterLevels(): GroundwaterLevelsService;
	parcelUseTS(): ParcelUseTSService;
	referenceTables(): ReferenceTablesService;
	structures(): StructuresService;
	surfaceWater(): SurfaceWaterService;
	telemetryStations(): TelemetryStationsService;
	waterRights(): WaterRightsService;
	wellPermits(): WellPermitsService;
}
