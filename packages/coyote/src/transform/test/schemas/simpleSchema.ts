export const simpleSchema = {
  date: 'dateTime',
  siteName: 'location',
};

export const simpleSchema2 = {
  date: 'data.*.results.*.dateTime',
  value: 'data.*.results.*.value',
  siteName: 'data.location',
};

export const simpleSchema3 = {
  date: 'data.*.results[0].data.*.dateTime',
  value: 'data.*.results[0].data.*.value',
  siteName: 'data.location',
};
