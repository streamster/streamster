import { dwrService } from './types';
import { dwrSurfaceWaterService } from './SurfaceWater/types';
import SurfaceWater from './SurfaceWater';

const dwr: dwrService = {
  surfaceWater(): dwrSurfaceWaterService {
    return new SurfaceWater();
  },
};

export default dwr;
