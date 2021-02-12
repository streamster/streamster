export default {
  date: 'value.timeSeries.*.values[0].value.*.dateTime',
  siteId: 'value.timeSeries.*.sourceInfo.siteCode[0].value',
  siteName: 'value.timeSeries.*.sourceInfo.siteName',
  parameterId: 'value.timeSeries.*.variable.variableCode[0].value',
  parameter: 'value.timeSeries.*.variable.variableName',
  units: 'value.timeSeries.*.variable.unit.unitCode',
  value: 'value.timeSeries.*.values[0].value.*.value',
  qualifiers: 'value.timeSeries.*.values[0].value.*.qualifiers',
};
