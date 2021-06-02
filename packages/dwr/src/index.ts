import { DwrService, SurfaceWaterService } from './types';
import SurfaceWater from './SurfaceWater';

const dwr: DwrService = {
  surfaceWater(): SurfaceWaterService {
    return new SurfaceWater();
  },
};

export default dwr;
