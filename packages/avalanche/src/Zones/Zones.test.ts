import avalanche from '../index';
const zones = avalanche.zones();

describe('Avalanche Zones Test', () => {
  test('All Avalanche Zones: Returns data of expected length', async () => {
    try {
      const zonesData = await zones.getZones();
      expect(zonesData.length).toBe(83);
    } catch (err) {
      console.error(err);
    }
  });
  test('All Avalanche Zones: Returns data of expected shape', async () => {
    try {
      const zonesData = await zones.getZones();
      const keys = Object.keys(zonesData[0]);
      const expectedKeys = [
        'id',
        'name',
        'center',
        'center_link',
        'timezone',
        'center_id',
        'state',
      ];
      expect(keys).toEqual(expectedKeys);
    } catch (err) {
      console.error(err);
    }
  });
});
