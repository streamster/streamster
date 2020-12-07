import formatTimeSeries from '.';

describe('formatTimeSeries', () => {
  test('Invalid config: missing required service', () => {
    expect(() => prepareUrl('invalid service' as any, {})).toThrow(
      'Please provide a valid service. Valid options include: daily or instantaneous.'
    );
  });
});
