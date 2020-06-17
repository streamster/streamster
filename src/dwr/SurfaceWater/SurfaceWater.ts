import { dwrSurfaceWaterService } from './types';

class SurfaceWater implements dwrSurfaceWaterService {
  sayName(name: string) {
    return name;
  }
}

export default SurfaceWater;
