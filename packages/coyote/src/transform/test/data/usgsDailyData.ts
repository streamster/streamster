export default {
  name: 'ns1:timeSeriesResponseType',
  declaredType: 'org.cuahsi.waterml.TimeSeriesResponseType',
  scope: 'javax.xml.bind.JAXBElement$GlobalScope',
  value: {
    queryInfo: {
      queryURL:
        'http://waterservices.usgs.gov/nwis/dv/format=json&sites=09361500,09364500&startDT=2020-09-01&endDT=2020-09-05&parameterCd=00060,00010&siteStatus=all',
      criteria: {
        locationParam: '[ALL:09361500, ALL:09364500]',
        variableParam: '[00060, 00010]',
        timeParam: {
          beginDateTime: '2020-09-01T00:00:00.000',
          endDateTime: '2020-09-05T00:00:00.000',
        },
        parameter: [],
      },
      note: [
        { value: '[ALL:09361500, ALL:09364500]', title: 'filter:sites' },
        {
          value:
            '[mode=RANGE, modifiedSince=null] interval={INTERVAL[2020-09-01T00:00:00.000-04:00/2020-09-05T00:00:00.000-04:00]}',
          title: 'filter:timeRange',
        },
        { value: 'methodIds=[ALL]', title: 'filter:methodId' },
        { value: '2020-12-08T15:48:52.479Z', title: 'requestDT' },
        { value: 'def4f9e0-396c-11eb-8573-2cea7f58f5ca', title: 'requestId' },
        {
          value:
            'Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.',
          title: 'disclaimer',
        },
        { value: 'vaas01', title: 'server' },
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
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [
              { value: 'Maximum', name: 'Statistic', optionCode: '00001' },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '19.1',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '19.3',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '19.6',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '19.9',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '20.3',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 19605 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09361500:00010:00001',
      },
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
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [
              { value: 'Minimum', name: 'Statistic', optionCode: '00002' },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '15.4',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '15.2',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '15.1',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '15.5',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '15.9',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 19606 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09361500:00010:00002',
      },
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
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [{ value: 'Mean', name: 'Statistic', optionCode: '00003' }],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '17.4',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '17.4',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '17.5',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '17.9',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '18.0',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 19607 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09361500:00010:00003',
      },
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
          options: {
            option: [{ value: 'Mean', name: 'Statistic', optionCode: '00003' }],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807197',
        },
        values: [
          {
            value: [
              {
                value: '174',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '168',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '161',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '150',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '147',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 19604 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09361500:00060:00003',
      },
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT FARMINGTON, NM',
          siteCode: [
            { value: '09364500', network: 'NWIS', agencyCode: 'USGS' },
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
              latitude: 36.7225,
              longitude: -108.20175,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '35', name: 'stateCd' },
            { value: '35045', name: 'countyCd' },
          ],
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [
              { value: 'Maximum', name: 'Statistic', optionCode: '00001' },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '24.8',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '25.9',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '26.9',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '27.3',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '27.7',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 226809 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09364500:00010:00001',
      },
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT FARMINGTON, NM',
          siteCode: [
            { value: '09364500', network: 'NWIS', agencyCode: 'USGS' },
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
              latitude: 36.7225,
              longitude: -108.20175,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '35', name: 'stateCd' },
            { value: '35045', name: 'countyCd' },
          ],
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [
              { value: 'Minimum', name: 'Statistic', optionCode: '00002' },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '18.7',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '16.8',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '16.8',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '17.4',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '18.1',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 226811 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09364500:00010:00002',
      },
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT FARMINGTON, NM',
          siteCode: [
            { value: '09364500', network: 'NWIS', agencyCode: 'USGS' },
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
              latitude: 36.7225,
              longitude: -108.20175,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '35', name: 'stateCd' },
            { value: '35045', name: 'countyCd' },
          ],
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [{ value: 'Mean', name: 'Statistic', optionCode: '00003' }],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [
              {
                value: '21.4',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '21.2',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '21.8',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '22.4',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '22.8',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 226810 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09364500:00010:00003',
      },
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT FARMINGTON, NM',
          siteCode: [
            { value: '09364500', network: 'NWIS', agencyCode: 'USGS' },
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
              latitude: 36.7225,
              longitude: -108.20175,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '35', name: 'stateCd' },
            { value: '35045', name: 'countyCd' },
          ],
        },
        variable: {
          variableCode: [
            {
              value: '00010',
              network: 'NWIS',
              vocabulary: 'NWIS:UnitValues',
              variableID: 45807042,
              default: true,
            },
          ],
          variableName: 'Temperature, water, &#176;C',
          variableDescription: 'Temperature, water, degrees Celsius',
          valueType: 'Derived Value',
          unit: { unitCode: 'deg C' },
          options: {
            option: [
              {
                value: 'Random Instantaneous Values',
                name: 'Statistic',
                optionCode: '00011',
              },
            ],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807042',
        },
        values: [
          {
            value: [],
            qualifier: [],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 100100 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09364500:00010:00011',
      },
      {
        sourceInfo: {
          siteName: 'ANIMAS RIVER AT FARMINGTON, NM',
          siteCode: [
            { value: '09364500', network: 'NWIS', agencyCode: 'USGS' },
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
              latitude: 36.7225,
              longitude: -108.20175,
            },
            localSiteXY: [],
          },
          note: [],
          siteType: [],
          siteProperty: [
            { value: 'ST', name: 'siteTypeCd' },
            { value: '14080104', name: 'hucCd' },
            { value: '35', name: 'stateCd' },
            { value: '35045', name: 'countyCd' },
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
          options: {
            option: [{ value: 'Mean', name: 'Statistic', optionCode: '00003' }],
          },
          note: [],
          noDataValue: -999999,
          variableProperty: [],
          oid: '45807197',
        },
        values: [
          {
            value: [
              {
                value: '31.6',
                qualifiers: ['P'],
                dateTime: '2020-09-01T00:00:00.000',
              },
              {
                value: '31.0',
                qualifiers: ['P'],
                dateTime: '2020-09-02T00:00:00.000',
              },
              {
                value: '27.1',
                qualifiers: ['P'],
                dateTime: '2020-09-03T00:00:00.000',
              },
              {
                value: '26.2',
                qualifiers: ['P'],
                dateTime: '2020-09-04T00:00:00.000',
              },
              {
                value: '25.6',
                qualifiers: ['P'],
                dateTime: '2020-09-05T00:00:00.000',
              },
            ],
            qualifier: [
              {
                qualifierCode: 'P',
                qualifierDescription: 'Provisional data subject to revision.',
                qualifierID: 0,
                network: 'NWIS',
                vocabulary: 'uv_rmk_cd',
              },
            ],
            qualityControlLevel: [],
            method: [{ methodDescription: '', methodID: 100101 }],
            source: [],
            offset: [],
            sample: [],
            censorCode: [],
          },
        ],
        name: 'USGS:09364500:00060:00003',
      },
    ],
  },
  nil: false,
  globalScope: true,
  typeSubstituted: false,
};
