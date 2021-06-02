import axios from 'axios';
import { prepareUrl } from '../lib/prepareUrl';
import {
  SurfaceWaterService,
  GetStationsArgs,
  Services,
  SubServices,
} from '../types';

class SurfaceWater implements SurfaceWaterService {
  public prepareUrl<T>(
    service: Services,
    subService: SubServices,
    queryParameters: T
  ) {
    return prepareUrl(service, subService, queryParameters);
  }

  public async getStations(config: GetStationsArgs) {
    const url = this.prepareUrl(
      'surfacewater',
      'surfacewaterstations',
      config.queryParameters
    );
    try {
      const data = await axios.get(url).then((result: any) => {
        return result.data;
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default SurfaceWater;
