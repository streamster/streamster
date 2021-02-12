import transform from '..';
import {
  simpleData,
  simpleData2,
  simpleData3,
  usgsDailyData,
  usgsInstantaneousData,
} from './data';
import {
  simpleExpected,
  simpleExpected2,
  usgsDailyExpected,
  usgsInstantaneousExpected,
} from './expected';
import {
  simpleSchema,
  simpleSchema2,
  simpleSchema3,
  usgsDailySchema,
  usgsInstantaneousSchema,
} from './schemas';

describe('transformSchema', () => {
  test('Errors: should throw an error if invalid config provided', () => {
    expect(() =>
      transform({
        schema: usgsDailySchema,
      } as any)
    ).toThrowError(
      "Error: No data provided. We can't transform the data if there's no data to transform!"
    );
    expect(() =>
      transform({
        data: usgsDailyData,
      } as any)
    ).toThrowError(
      "Error: No schema provided. We can't transform the data unless you tell how us it should be transformed!"
    );
  });
  test('should return data that matches the shape of a simple schema map', () => {
    const output = transform({
      data: simpleData,
      schema: simpleSchema,
    });
    expect(output).toEqual(simpleExpected);
  });
  test('should return data that matches the shape of a simple schema map - alternate 1', () => {
    const output = transform({
      data: simpleData2,
      schema: simpleSchema2,
    });
    expect(output).toEqual(simpleExpected2);
  });
  test('should return data that matches the shape of a simple schema map - alternate 2', () => {
    const output = transform({
      data: simpleData3,
      schema: simpleSchema3,
    });
    expect(output).toEqual(simpleExpected2);
  });
  test('should return data that matches the shape of the usgs daily data schema map', () => {
    const output = transform({
      data: usgsDailyData,
      schema: usgsDailySchema,
    });
    expect(output).toEqual(usgsDailyExpected);
  });
  test('should return data that matches the shape of the usgs instantaneous data schema map', () => {
    const output = transform({
      data: usgsInstantaneousData,
      schema: usgsInstantaneousSchema,
    });
    expect(output).toEqual(usgsInstantaneousExpected);
  });
  test.skip('Objects: should return an object that matches the shape of the schemaMap', () => {
    // test content here
  });
  test.skip('Arrays - * selector: should return data that matches the shape of the schemaMap', () => {
    // test content here
  });
  test.skip('Arrays - real selector: should return data that matches the shape of the schemaMap', () => {
    // test content here
  });
  test.skip('schemaMap: custom transform functions should work', () => {
    // test content here
  });
});
