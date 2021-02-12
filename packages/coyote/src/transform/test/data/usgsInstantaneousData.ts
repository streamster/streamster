export default {
  name: 'ns1:timeSeriesResponseType',
  declaredType: 'org.cuahsi.waterml.TimeSeriesResponseType',
  scope: 'javax.xml.bind.JAXBElement$GlobalScope',
  value: {
    queryInfo: {
      queryURL:
        'http://nwis.waterservices.usgs.gov/nwis/iv/format=json&sites=09361500&siteStatus=active&parameterCd=00060&startDT=2019-10-01T00:00-0700&endDT=2019-10-01T00:30-0700',
      criteria: {
        locationParam: '[ALL:09361500]',
        variableParam: '[00060]',
        timeParam: {
          beginDateTime: '2019-10-01T07:00:00.000',
          endDateTime: '2019-10-01T07:30:00.000',
        },
        parameter: [],
      },
      note: [
        { value: '[ALL:09361500]', title: 'filter:sites' },
        {
          value:
            '[mode=RANGE, modifiedSince=null] interval={INTERVAL[2019-10-01T07:00:00.000Z/2019-10-01T07:30:00.000Z]}',
          title: 'filter:timeRange',
        },
        { value: 'methodIds=[ALL]', title: 'filter:methodId' },
        { value: '2021-01-29T14:10:46.217Z', title: 'requestDT' },
        { value: 'c7f3ac80-623b-11eb-acf5-4cd98f86fad9', title: 'requestId' },
        {
          value:
            'Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.',
          title: 'disclaimer',
        },
        { value: 'nadww02', title: 'server' },
      ],
    },
    timeSeries: [
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT DURANGO, CO',
          siteCode: [
            { value: '09361500', network: 'NWIS', agencyCode: 'USGS' },
          ],
          timeZoneInfo: {
            defaultTimeZone: { zoneOffset: '-07:00', zoneAbbreviation: 'MST' },
            daylightSavingsTimeZone: {
              zoneOffset: '-06:00',
              zoneAbbreviation: 'MDT',
            },
            siteUsesDaylightSavingsTime: true,
          },
          geoLocation: {
            geogLocation: {
              srs: 'EPSG:4326',
              latitude: 37.2791688,
              longitude: -107.8803445,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '08', name: 'stateCd' },
            { value: '08067', name: 'countyCd' },
          ],
        },
        variable: {
          variableCode: [
            {
              value: '00060',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807197,
              default: true,
            },
          ],
          variableName: 'Streamflow, ft&#179;/s',
          variableDescription: 'Discharge, cubic feet per second',
          valueType: 'Derived Value',
          unit: { unitCode: 'ft3/s' },
          options: { option: [{ name: 'Statistic', optionCode: '00000' }] },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807197',
        },
        values: [
          {
            value: [
              {
                value: '238',
                qualifiers: ['A'],
                dateTime: '2019-10-01T00:00:00.000-06:00',
              },
              {
                value: '238',
                qualifiers: ['A'],
                dateTime: '2019-10-01T00:15:00.000-06:00',
              },
              {
                value: '238',
                qualifiers: ['A'],
                dateTime: '2019-10-01T00:30:00.000-06:00',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'A',
                qualifierDescription:
                  'Approved for publication -- Processing and review completed.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 212173 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09361500:00060:00000',
      },
    ],
  },
  nil: false,
  globalScope: true,
  typeSubstituted: false,
};
