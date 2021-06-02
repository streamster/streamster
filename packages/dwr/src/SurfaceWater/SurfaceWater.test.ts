import dwr from '../index';
const surfaceWater = dwr.surfaceWater();

describe.skip('DWR Surface Water Tests: Config Validation', () => {
  // test('Invalid config: missing required param', () => {
  //   const valid: any = daily.validate({
  //     badSiteKey: '09361500',
  //   });
  //   expect(valid.length).toBeGreaterThan(0);
  // });
  // test('Invalid config: two required params present', () => {
  //   const valid: any = daily.validate({
  //     site: '09361500',
  //     stateCd: 'CO',
  //   });
  //   expect(valid.length).toBeGreaterThan(0);
  // });
  // test('Valid config', () => {
  //   const valid: any = daily.validate({
  //     site: '09361500',
  //   });
  //   expect(valid).toBe(true);
  // });
});

describe('DWR Surface Water Tests: Successfully retrieves data', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  test('Station Info: Returns raw data', async () => {
    try {
      const data = await surfaceWater.getStations({
        format: 'raw',
        queryParameters: {
          format: 'json',
          county: 'La Plata',
        },
      });
      const expectedLength = 52;
      expect(data.ResultCount).toBe(expectedLength);
    } catch (err) {
      console.error(err);
    }
  });
});
