const StringOperatorsSchema = {
  oneOf: [
    { type: 'string' },
    {
      type: 'object',
      properties: {
        equal: { type: 'string' },
        contains: { type: 'string' },
        startsWith: { type: 'string' },
        endsWith: { type: 'string' },
      },
      oneOf: [
        { required: ['equal'] },
        { required: ['contains'] },
        { required: ['startsWith'] },
        { required: ['endsWith'] },
      ],
    },
  ],
};

const NumericOperatorsSchema = {
  oneOf: [
    { type: 'number' },
    {
      type: 'object',
      properties: {
        equal: { type: 'number' },
        min: { type: 'number' },
        max: { type: 'number' },
      },
      oneOf: [
        { required: ['equal'] },
        { required: ['min'] },
        { required: ['max'] },
      ],
    },
  ],
};

const DateOperatorsSchema = {
  oneOf: [
    { type: 'string' },
    {
      type: 'object',
      properties: {
        equal: { type: 'string' },
        min: { type: 'string' },
        max: { type: 'string' },
      },
      oneOf: [
        { required: ['equal'] },
        { required: ['min'] },
        { required: ['max'] },
      ],
    },
  ],
};

const Formats = {
  type: 'string',
  enum: ['json', 'xml', 'csv', 'tsx', 'geojson'],
};

const Encoding = {
  type: 'string',
  enum: ['gzip', 'deflate'],
};

const BasicStringArray = {
  type: 'array',
  items: { type: 'string' },
};

const BasicString = { type: 'string' };
const BasicNumber = { type: 'number' };

export const GetStationsSchema = {
  type: 'object',
  properties: {
    format: Formats,
    encoding: Encoding,
    fields: BasicStringArray,
    abbrev: StringOperatorsSchema,
    county: StringOperatorsSchema,
    division: NumericOperatorsSchema,
    modified: BasicString,
    stationName: StringOperatorsSchema,
    usgsSiteId: StringOperatorsSchema,
    waterDistrict: NumericOperatorsSchema,
    location: {
      type: 'object',
      properties: {
        latitude: BasicNumber,
        longitude: BasicNumber,
        radius: BasicNumber,
        units: { type: 'string', enum: ['feet', 'miles'] },
      },
    },
    pageSize: BasicNumber,
    pageIndex: BasicNumber,
    apiKey: BasicString,
  },
  additionalProperties: false,
};

export const GetStationDataTypesSchema = {
  type: 'object',
  properties: {
    format: Formats,
    encoding: Encoding,
    fields: BasicStringArray,
    abbrev: StringOperatorsSchema,
    county: StringOperatorsSchema,
    division: NumericOperatorsSchema,
    measType: StringOperatorsSchema,
    porLastModified: BasicString,
    stationName: StringOperatorsSchema,
    usgsSiteId: StringOperatorsSchema,
    waterDistrict: NumericOperatorsSchema,
    location: {
      type: 'object',
      properties: {
        latitude: BasicNumber,
        longitude: BasicNumber,
        radius: BasicNumber,
        units: { type: 'string', enum: ['feet', 'miles'] },
      },
    },
    pageSize: BasicNumber,
    pageIndex: BasicNumber,
    apiKey: BasicString,
  },
  additionalProperties: false,
};

export const GetDayTimeSeriesSchema = {
  type: 'object',
  properties: {
    format: Formats,
    encoding: Encoding,
    fields: BasicStringArray,
    abbrev: StringOperatorsSchema,
    county: StringOperatorsSchema,
    division: NumericOperatorsSchema,
    measDate: DateOperatorsSchema,
    measType: StringOperatorsSchema,
    modified: BasicString,
    stationNum: StringOperatorsSchema,
    usgsSiteId: StringOperatorsSchema,
    pageSize: BasicNumber,
    pageIndex: BasicNumber,
    apiKey: BasicString,
  },
  additionalProperties: false,
};

export const GetMonthTimeSeriesSchema = {
  type: 'object',
  properties: {
    format: Formats,
    encoding: Encoding,
    fields: BasicStringArray,
    abbrev: StringOperatorsSchema,
    county: StringOperatorsSchema,
    division: NumericOperatorsSchema,
    calYear: NumericOperatorsSchema,
    measType: StringOperatorsSchema,
    modified: BasicString,
    stationNum: StringOperatorsSchema,
    usgsSiteId: StringOperatorsSchema,
    pageSize: BasicNumber,
    pageIndex: BasicNumber,
    apiKey: BasicString,
  },
  additionalProperties: false,
};
