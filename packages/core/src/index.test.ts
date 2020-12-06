import { validateKeys } from './index';

describe('Core Tests: validateKeys()', () => {
  test('Throws error when required keys are not provided.', async () => {
    const input: string[] = [];
    const requiredKeys = ['sites'];
    expect(validateKeys(input, requiredKeys)).toEqual({
      error: 'Missing required keys',
      message: `The following required keys were missing: sites`,
    });
  });
  test('Returns true when no errors are present.', async () => {
    const input = ['sites'];
    const requiredKeys = ['sites'];
    expect(validateKeys(input, requiredKeys)).toEqual(true);
  });
});
