import transformSchema from '.';
import { dailyData } from './testData';

const schemaMap = {
  date: 'value.timeSeries.values.value.dateTime',
  siteId: 'value.timeSeries.sourceInfo.siteCode.value',
  siteName: 'value.timeSeries.sourceInfo.siteName',
  geography: (row: any) => {
    const geo = { ...row.value.timeSeries.geoLocation };
    return {
      type: 'Point',
      coordinates: [geo.longitude, geo.latitude],
    };
  },
  parameterId: 'value.variable.variableCode.value',
  parameter: 'value.variable.variableName',
  units: 'value.variable.unit.unitCode',
  statistic: (row: any) => {
    const opts = { ...row.value.variable.options.option };
    return opts.find((d: any) => d.name === 'Statistic').value;
  },
};

describe('transformSchema', () => {
  test('should return data as is if no schemaMap provided.', () => {
    const result = transformSchema(dailyData, null);
    expect(result).toEqual(result);
  });
  test('should return data that matches the shape of the schemaMap', () => {
    const result = transformSchema(dailyData, schemaMap);
  });
});
