import { avalancheService, avalancheZonesService } from './types';
import Zones from './Zones';

const avalanche: avalancheService = {
  zones(): avalancheZonesService {
    return new Zones();
  },
};

export default avalanche;
