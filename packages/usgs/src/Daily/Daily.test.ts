import usgs from '../index';
const daily = usgs.daily();

describe('USGS Daily Service Tests: Config Validation', () => {
  test('Invalid config: missing required param', () => {
    const valid: any = daily.validate({
      badSiteKey: '09361500',
    });
    expect(valid.length).toBeGreaterThan(0);
  });
  test('Invalid config: two required params present', () => {
    const valid: any = daily.validate({
      site: '09361500',
      stateCd: 'CO',
    });
    expect(valid.length).toBeGreaterThan(0);
  });
  test('Valid config', () => {
    const valid: any = daily.validate({
      site: '09361500',
    });
    expect(valid).toBe(true);
  });
});

describe('USGS Daily Service Tests: Successfully retrieves data', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  test('Single Site (Specific Dates): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          sites: '09361500',
          siteStatus: 'active',
          parameterCd: '00060',
          startDT: '2019-10-01',
          endDT: '2019-10-02',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });

  test('Single State (Specific Dates): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          stateCd: 'co',
          siteStatus: 'active',
          parameterCd: '00060',
          startDT: '2019-10-01',
          endDT: '2019-10-02',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });

  test('Single HUC (Specific Dates): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          huc: '14080104',
          siteStatus: 'active',
          parameterCd: '00060',
          startDT: '2019-10-01',
          endDT: '2019-10-01',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });

  test('Bounding Box (Specific Dates): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          bBox: '-108.115341,37.031969,-107.385747,37.424825',
          siteStatus: 'active',
          parameterCd: '00060',
          startDT: '2019-10-01',
          endDT: '2019-10-01',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });

  test('Single County (Specific Dates): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          countyCd: '08067',
          siteStatus: 'active',
          parameterCd: '00060',
          startDT: '2019-10-01',
          endDT: '2019-10-01',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });

  test('Single Site (Period): Returns data', async () => {
    try {
      const data = await daily.getDailyData({
        format: 'raw',
        queryParameters: {
          sites: '09361500',
          siteStatus: 'active',
          parameterCd: '00060',
          period: 'P2D',
        },
      });
      expect(data.value.timeSeries.length).toBeGreaterThan(0);
    } catch (err) {
      console.error(err);
    }
  });
});

describe.only('USGS Daily Service Tests: Successfully transforms data', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  test('Returns time series data in expected shape', async () => {
    const expectedKeys = [
      'date',
      'siteId',
      'siteName',
      'parameterId',
      'parameter',
      'units',
      'value',
      'qualifiers',
      'latitude',
      'longitude',
    ];
    try {
      const data = await daily.getDailyData({
        format: 'time-series',
        queryParameters: {
          sites: '09361500',
          siteStatus: 'active',
          parameterCd: '00060',
        },
      });
      const keys = Object.keys(data[0]);
      expect(data.length).toBe(1);
      expect(keys).toEqual(expectedKeys);
    } catch (err) {
      console.error(err);
    }
  });

  test('Returns time series geojson data in expected shape', async () => {
    const expectedTopLevelKeys = ['type', 'features'];
    const expectedFeatureKeys = ['type', 'geometry', 'properties'];
    const expectedPropKeys = [
      'date',
      'siteId',
      'siteName',
      'parameterId',
      'parameter',
      'units',
      'value',
      'qualifiers',
      'latitude',
      'longitude',
    ];
    try {
      const data = await daily.getDailyData({
        format: 'time-series-geojson',
        queryParameters: {
          sites: '09361500',
          siteStatus: 'active',
          parameterCd: '00060',
        },
      });
      const topLevelKeys = Object.keys(data);
      const featureKeys = Object.keys(data.features[0]);
      const propertyKeys = Object.keys(data.features[0].properties);
      expect(data.features.length).toBe(1);
      expect(topLevelKeys).toEqual(expectedTopLevelKeys);
      expect(featureKeys).toEqual(expectedFeatureKeys);
      expect(propertyKeys).toEqual(expectedPropKeys);
    } catch (err) {
      console.error(err);
    }
  });
});
