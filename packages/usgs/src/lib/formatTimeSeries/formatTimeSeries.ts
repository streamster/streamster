/**
 * Restructures the data into an array of objects aka a time series
 * @param {any} data data to restructure
 * @returns {array}
 */
export default (data: any) => {
  const { timeSeries } = data.value;
  const series = timeSeries.map((series: any) => {
    const { sourceInfo, variable, values } = series;
    const valuesArr = values[0].value;
    const method = values[0].method[0].methodID;
    const results = valuesArr.map((val: any) => {
      const { value, qualifiers, dateTime } = val;
      const { siteName } = sourceInfo;
      const { variableDescription, unit } = variable;
      return {
        siteName,
        variableDescription,
        value,
        unit: unit.unitCode,
        qualifiers,
        dateTime,
        method,
      };
    });
    return results;
  });
  return series.reduce((acc: any[], val: any[]) => [...acc, ...val]);
};
