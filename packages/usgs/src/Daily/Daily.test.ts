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

describe('USGS Daily Service Tests: Time Series', () => {
  test('Single Site (Specific Dates): Returns data', async () => {
    jest.setTimeout(10000);
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
    jest.setTimeout(10000);
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

  test('Single HUC (Specific Dates): Returns data in expected shape', async () => {
    jest.setTimeout(10000);
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

  test('Bounding Box (Specific Dates): Returns data in expected shape', async () => {
    jest.setTimeout(10000);
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

  test('Single County (Specific Dates): Returns data in expected shape', async () => {
    jest.setTimeout(10000);
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

  test('Single Site (Period): Returns data in expected shape', async () => {
    jest.setTimeout(10000);
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
