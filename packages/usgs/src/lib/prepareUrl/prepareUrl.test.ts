import prepareUrl from './prepareUrl';

const invalidQP = null;

describe('prepareUrl', () => {
  test('Invalid config: missing required service', () => {
    expect(() => prepareUrl('invalid service' as any, {})).toThrow(
      'Please provide a valid service. Valid options include: daily or instantaneous.'
    );
  });
  test('Invalid config: missing required query params', () => {
    expect(() => prepareUrl('daily', invalidQP as any)).toThrow(
      'Please provide a valid set of query parameters.'
    );
  });
});
