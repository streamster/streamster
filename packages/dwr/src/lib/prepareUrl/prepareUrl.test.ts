import { GetStationQueryParameters } from '../../types';
import { prepareUrl } from './prepareUrl';

describe('prepareUrl', () => {
  test('Invalid config: missing required service', () => {
    expect(() =>
      prepareUrl<GetStationQueryParameters>(
        'invalid service' as any,
        'surfacewaterstations',
        {} as any
      )
    ).toThrow('Please provide a valid service.');
  });
  test('Invalid config: missing required sub-service', () => {
    expect(() =>
      prepareUrl<GetStationQueryParameters>(
        'surfacewater',
        'invalid sub-service' as any,
        {} as any
      )
    ).toThrow('Please provide a valid sub-service.');
  });
  test('URL Generates Correctly', () => {
    const expected =
      'https://dwr.state.co.us/Rest/GET/api/v2/surfacewater/surfacewaterstations?format=json&abbrev=FID*&county=La Plata&min-division=1&max-division=4&latitude=45&longitude=-107&radius=1&units=miles&pageSize=30';
    const url = prepareUrl<GetStationQueryParameters>(
      'surfacewater',
      'surfacewaterstations',
      {
        format: 'json',
        abbrev: {
          startsWith: 'FID',
        },
        county: 'La Plata',
        division: {
          min: 1,
          max: 4,
        },
        location: {
          latitude: 45,
          longitude: -107,
          radius: 1,
          units: 'miles',
        },
        pageSize: 30,
      }
    );
    expect(url).toBe(expected);
  });
});
