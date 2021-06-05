import dwr from '../index';
import { StationsSchema } from './SurfaceWater';
const surfaceWater = dwr.surfaceWater();

describe('DWR Surface Water Tests: Config Validation', () => {
  test('Invalid config: missing required param', () => {
    const valid: any = surfaceWater.validate(
      {
        format: 'bad format',
      },
      StationsSchema
    );
    expect(valid.length).toBeGreaterThan(0);
  });
  test('Valid config', () => {
    const valid: any = surfaceWater.validate(
      {
        format: 'json',
      },
      StationsSchema
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
  test('Station Info: Returns raw data', async () => {
    try {
      const data = await surfaceWater.getStations({
        format: 'raw',
        queryParameters: {
          format: 'json',
          county: 'La Plata',
        },
      });
      const expectedLength = 52;
      expect(data.ResultCount).toBe(expectedLength);
    } catch (err) {
      console.error(err);
    }
  });
  test('Station Info: Returns pretty data', async () => {
    try {
      const data = await surfaceWater.getStations({
        format: 'pretty',
        queryParameters: {
          format: 'json',
          county: 'La Plata',
        },
      });
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
