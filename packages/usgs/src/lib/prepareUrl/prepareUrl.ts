import { generators } from '@streamster/core';
import { queryParameters, Services } from '../../types';

const { constructUrl } = generators;

const serviceLookup = {
  daily: 'dv',
  instantaneous: 'iv',
  sites: 'site',
};

/**
 * Generates a request URL to the daily service endpoint using the user
 * provided query parameters
 * @returns {string} API url
 */
export default (
  service: Services,
  queryParameters: queryParameters
): string => {
  const serviceMapped = serviceLookup[service];
  if (!serviceMapped) {
    throw new Error(
      'Please provide a valid service. Valid options include: daily or instantaneous.'
    );
  }
  if (!queryParameters) {
    throw new Error('Please provide a valid set of query parameters.');
  }

  const format = service === 'sites' ? 'rdb' : 'json';
  return constructUrl(
    `https://waterservices.usgs.gov/nwis/${serviceMapped}/?format=${format}&`,
    queryParameters
  );
};
