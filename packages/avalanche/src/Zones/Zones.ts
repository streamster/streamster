import { avalancheZonesService } from '../types';
import ZonesData from './Zones.Data';
import { transform } from '@streamster/coyote';

const ZonesSchema = {
  id: 'features.*.id',
  name: 'features.*.properties.name',
  center: 'features.*.properties.center',
  center_link: 'features.*.properties.center_link',
  timezone: 'features.*.properties.timezone',
  center_id: 'features.*.properties.center_id',
  state: 'features.*.properties.state',
};

class Zones implements avalancheZonesService {
  // TODO
  // should return a single forecast zone based on provided query parameters
  // look into sift as a possible way to implement filtering
  // https://www.npmjs.com/package/sift
  // also checkout https://www.gatsbyjs.com/docs/query-filters
  public async getZone() {}

  public async getZones() {
    return new Promise(resolve => {
      const transformedZones = transform({
        data: ZonesData,
        schema: ZonesSchema,
      });

      resolve(transformedZones);
    });
  }

  // TODO
  // should return zones that currently have forecasts returned from
  // the avalanche.org API
  public async getZonesWithForecast() {}
}

export default Zones;
