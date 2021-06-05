import { prepareQueryParams } from './prepareQueryParams';

describe('prepareQueryParams', () => {
  test('URL Generates Correctly', () => {
    const expected = {
      format: 'json',
      abbrev: 'FID*',
      latitude: 45,
      longitude: -107,
      radius: 1,
      units: 'miles',
      county: 'La Plata',
      'min-modified': '05-31-2021_00:30',
      'min-division': 1,
      'max-division': 4,
      'min-waterDistrict': 8,
      pageSize: 30,
    };
    const finalQueryParams = prepareQueryParams({
      format: 'json',
      abbrev: {
        startsWith: 'FID',
      },
      division: {
        min: 1,
        max: 4,
      },
      waterDistrict: {
        min: 8,
      },
      modified: '05-31-2021_00:30',
      location: {
        latitude: 45,
        longitude: -107,
        radius: 1,
        units: 'miles',
      },
      county: 'La Plata',
      pageSize: 30,
    });
    expect(finalQueryParams).toEqual(expected);
  });
});
