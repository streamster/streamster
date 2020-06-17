import Streamster from '../../index';

describe('USGS instantaneous Service Tests: Time Series', () => {
  test('Single Site (Specific Dates): Returns data', () => {
    jest.setTimeout(10000);
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        sites: '09361500',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01T00:00-0700',
        endDT: '2019-10-02T23:59-0700',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });

  test('Single State (Specific Dates): Returns data', () => {
    jest.setTimeout(30000);
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        stateCd: 'co',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01T00:00-0700',
        endDT: '2019-10-02T23:59-0700',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });

  test('Single HUC (Specific Dates): Returns data in expected shape', () => {
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        huc: '14080104',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01T00:00-0700',
        endDT: '2019-10-02T23:59-0700',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });

  test('Bounding Box (Specific Dates): Returns data in expected shape', () => {
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        bBox: '-108.115341,37.031969,-107.385747,37.424825',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01T00:00-0700',
        endDT: '2019-10-02T23:59-0700',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });

  test('Single County (Specific Dates): Returns data in expected shape', () => {
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        countyCd: '08067',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01T00:00-0700',
        endDT: '2019-10-02T23:59-0700',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });

  test('Single Site (Period): Returns data in expected shape', () => {
    const streamlineTest = new Streamster.usgs().instantaneous({
      queryParameters: {
        sites: '09361500',
        siteStatus: 'active',
        parameterCd: '00060',
        period: 'P2D',
      },
    });

    return streamlineTest
      .getInstantaneousData({ format: 'raw' })
      .then((data: any) => {
        expect(data.value.timeSeries.length).toBeGreaterThan(0);
      })
      .catch((err: string) => {
        console.error(err);
      });
  });
});
