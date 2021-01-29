import formatTimeSeries from '.';

describe.skip('formatTimeSeries', () => {
  test('Invalid config: missing required service', () => {
    expect(() => formatTimeSeries('invalid service' as any)).toThrow(
      'Please provide a valid service. Valid options include: daily or instantaneous.'
    );
  });
});
