export default [
  { dateTime: '2020-01-01T08:00:00.000Z', location: 'CC-10' },
  { dateTime: '2020-01-02T08:00:00.000Z', location: 'CC-10' },
];

export const simpleData2 = {
  meta: {
    results: 2,
  },
  data: [
    {
      location: 'CC-10',
      results: [
        { dateTime: '2020-01-01T08:00:00.000Z', value: 12 },
        { dateTime: '2020-01-02T08:00:00.000Z', value: 10 },
      ],
    },
    {
      location: 'CT-2',
      results: [
        { dateTime: '2020-01-01T08:00:00.000Z', value: 14 },
        { dateTime: '2020-01-02T08:00:00.000Z', value: 8 },
      ],
    },
  ],
};

export const simpleData3 = {
  meta: {
    results: 2,
  },
  data: [
    {
      location: 'CC-10',
      results: [
        {
          data: [
            { dateTime: '2020-01-01T08:00:00.000Z', value: 12 },
            { dateTime: '2020-01-02T08:00:00.000Z', value: 10 },
          ],
        },
      ],
    },
    {
      location: 'CT-2',
      results: [
        {
          data: [
            { dateTime: '2020-01-01T08:00:00.000Z', value: 14 },
            { dateTime: '2020-01-02T08:00:00.000Z', value: 8 },
          ],
        },
      ],
    },
  ],
};
