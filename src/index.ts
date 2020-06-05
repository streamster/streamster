import usgs  from './usgs';
// import { Config, USGSService, StreamsterService } from './usgs/types';
import usgsSites from "./usgs/static/sites.json";
import usgsParameters from "./usgs/static/parameters.json";

const exported = {
  usgs,
}

export { usgsSites, usgsParameters };
export default exported;