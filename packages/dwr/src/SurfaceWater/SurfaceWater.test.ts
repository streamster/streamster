import dwr from '../index';
import { GetStationsSchema } from './schemas';
const surfaceWater = dwr.surfaceWater();

const defaultRawArgs = {
  format: 'raw',
  queryParameters: {
    format: 'json',
    county: 'La Plata',
  },
};

const defaultPrettyArgs = {
  ...defaultRawArgs,
  format: 'pretty',
};

const timeSeriesRawArgs = {
  format: 'raw',
  queryParameters: {
    format: 'json',
    abbrev: 'BASBBACO',
  },
};

const timeSeriesPrettyArgs = {
  ...timeSeriesRawArgs,
  format: 'pretty',
};

describe('DWR Surface Water Tests: Config Validation', () => {
  test('Invalid config: missing required param', () => {
    const valid: any = surfaceWater.validate(
      {
        format: 'bad format',
      },
      GetStationsSchema
    );
    expect(valid.length).toBeGreaterThan(0);
  });
  test('Valid config', () => {
    const valid: any = surfaceWater.validate(
      {
        format: 'json',
      },
      GetStationsSchema
    );
    expect(valid).toBe(true);
  });
});

describe('DWR Surface Water Tests: Successfully retrieves data', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  test.skip('Station Info: Works with no args', async () => {});
  test.skip('Station Info: Works with no provided query parameters', async () => {});
  describe('Stations', () => {
    test('Returns raw data', async () => {
      try {
        const data = await surfaceWater.getStations(defaultRawArgs as any);
        const expectedLength = 52;
        expect(data.ResultCount).toBe(expectedLength);
      } catch (err) {
        console.error(err);
      }
    });
    test('Returns pretty data', async () => {
      try {
        const data = await surfaceWater.getStations(defaultPrettyArgs as any);
        const expectedLength = 52;
        const expectedKeys = [
          'stationNum',
          'abbrev',
          'usgsSiteId',
          'stationName',
          'dataSource',
          'division',
          'waterDistrict',
          'county',
          'state',
          'utmX',
          'utmY',
          'latitude',
          'longitude',
          'locationAccuracy',
          'startDate',
          'endDate',
          'modified',
          'moreInformation',
          'measUnit',
        ];
        expect(data.length).toBe(expectedLength);
        expect(Object.keys(data[0])).toEqual(expectedKeys);
      } catch (err) {
        console.error(err);
      }
    });
  });
  describe('Station Data Types', () => {
    test('Returns raw data', async () => {
      try {
        const data = await surfaceWater.getStationDataTypes(
          defaultRawArgs as any
        );
        const expectedLength = 52;
        expect(data.ResultCount).toBe(expectedLength);
      } catch (err) {
        console.error(err);
      }
    });
    test('Returns pretty data', async () => {
      try {
        const data = await surfaceWater.getStationDataTypes(
          defaultPrettyArgs as any
        );
        const expectedLength = 52;
        const expectedKeys = [
          'stationNum',
          'abbrev',
          'usgsSiteId',
          'stationName',
          'dataSource',
          'division',
          'waterDistrict',
          'county',
          'st',
          'utmX',
          'utmY',
          'latdecdeg',
          'longdecdeg',
          'locationAccuracy',
          'measType',
          'measUnit',
          'porStart',
          'porEnd',
          'porLastModified',
        ];
        expect(data.length).toBe(expectedLength);
        expect(Object.keys(data[0])).toEqual(expectedKeys);
      } catch (err) {
        console.error(err);
      }
    });
  });
  describe('Station Time Series - Day', () => {
    test('Returns raw data', async () => {
      try {
        const data = await surfaceWater.getDayTimeSeries(
          timeSeriesRawArgs as any
        );
        expect(data.ResultCount).toBeGreaterThan(0);
      } catch (err) {
        console.error(err);
      }
    });
    test('Returns pretty data', async () => {
      try {
        const data = await surfaceWater.getDayTimeSeries(
          timeSeriesPrettyArgs as any
        );
        const expectedKeys = [
          'stationNum',
          'abbrev',
          'usgsSiteId',
          'measType',
          'measDate',
          'value',
          'flagA',
          'flagB',
          'flagC',
          'flagD',
          'dataSource',
          'modified',
          'measUnit',
        ];
        expect(data.length).toBeGreaterThan(0);
        expect(Object.keys(data[0])).toEqual(expectedKeys);
      } catch (err) {
        console.error(err);
      }
    });
  });
  describe('Station Time Series - Month', () => {
    test('Returns raw data', async () => {
      try {
        const data = await surfaceWater.getMonthTimeSeries(
          timeSeriesRawArgs as any
        );
        expect(data.ResultCount).toBeGreaterThan(0);
      } catch (err) {
        console.error(err);
      }
    });
    test('Returns pretty data', async () => {
      try {
        const data = await surfaceWater.getMonthTimeSeries(
          timeSeriesPrettyArgs as any
        );
        const expectedKeys = [
          'stationNum',
          'abbrev',
          'usgsSiteId',
          'measType',
          'calYear',
          'calMonNum',
          'minQCfs',
          'maxQCfs',
          'avgQCfs',
          'totalQAf',
          'measCount',
          'dataSource',
          'modified',
        ];
        expect(data.length).toBeGreaterThan(0);
        expect(Object.keys(data[0])).toEqual(expectedKeys);
      } catch (err) {
        console.error(err);
      }
    });
  });
});
