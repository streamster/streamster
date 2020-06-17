import { dwrService } from './types';
import { dwrSurfaceWaterService } from './SurfaceWater/types';
import SurfaceWater from './SurfaceWater';

class dwr implements dwrService {
  surfaceWater(): dwrSurfaceWaterService {
    return new SurfaceWater();
  }
}

export default dwr;
