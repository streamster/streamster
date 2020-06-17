import usgs from './usgs';
import dwr from './dwr';
import usgsSites from './usgs/static/sites.json';
import usgsParameters from './usgs/static/parameters.json';

const exported = {
  usgs,
  dwr,
};

export { usgsSites, usgsParameters };
export default exported;
