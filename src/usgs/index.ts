import {
  usgsService,
  usgsDailyService,
  usgsInstantaneousService,
  usgsConfig,
} from './types';
import Daily from './Daily';
import Instantaneous from './Instantaneous';

class usgs implements usgsService {
  daily(config: usgsConfig): usgsDailyService {
    return new Daily(config);
  }
  instantaneous(config: usgsConfig): usgsInstantaneousService {
    return new Instantaneous(config);
  }
}

export default usgs;
