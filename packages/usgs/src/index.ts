import {
  usgsService,
  usgsDailyService,
  usgsInstantaneousService,
} from './types';
import Daily from './Daily';
import Instantaneous from './Instantaneous';

const usgs: usgsService = {
  daily(): usgsDailyService {
    return new Daily();
  },
  instantaneous(): usgsInstantaneousService {
    return new Instantaneous();
  },
};

export default usgs;
