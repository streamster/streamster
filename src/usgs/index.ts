import { usgsService } from './types';
import { usgsDailyConfig, usgsDailyService } from './Daily/types';
import Daily from './Daily';

class usgs implements usgsService {
  daily(config: usgsDailyConfig): usgsDailyService {
    return new Daily(config);
  }
}

export default usgs;
