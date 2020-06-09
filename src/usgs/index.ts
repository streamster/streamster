import { usgsService } from './types';
import { usgsDailyConfig, usgsDailyService } from './Daily/types';
import {
  usgsInstantaneousConfig,
  usgsInstantaneousService,
} from './Instantaneous/types';
import Daily from './Daily';
import Instantaneous from './Instantaneous';

class usgs implements usgsService {
  daily(config: usgsDailyConfig): usgsDailyService {
    return new Daily(config);
  }
  instantaneous(config: usgsInstantaneousConfig): usgsInstantaneousService {
    return new Instantaneous(config);
  }
}

export default usgs;
