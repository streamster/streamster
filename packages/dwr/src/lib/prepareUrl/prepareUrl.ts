import { constructUrl } from '@streamster/core';
import { prepareQueryParams } from '../prepareQueryParams';
import { Services, SubServices } from '../../types';

const baseUrl = 'https://dwr.state.co.us/Rest/GET/api/v2';

const validServices = ['surfacewater'];
const validSubServices = [
  'surfacewaterstations',
  'surfacewaterstationdatatypes',
  'surfacewatertsday',
  'surfacewatertsmonth',
];

/**
 * Generates a request URL to the requested DWR service and sub-service endpoint
 * Tacks on a query string to the endpoint based on the user's provided query parameters
 * As part of this tack on process, we translate the query parameters as they are
 * expressed in the standard Streamster schema/format into the DWR specific format
 * @returns {string} final API endpoint with query string tacked on
 */
export function prepareUrl<T>(
  service: Services,
  subService: SubServices,
  queryParameters: T
): string {
  if (!validServices.includes(service)) {
    throw new Error('Please provide a valid service.');
  }
  if (!validSubServices.includes(subService)) {
    throw new Error('Please provide a valid sub-service.');
  }

  const finalQueryParams = prepareQueryParams(queryParameters);

  return constructUrl(`${baseUrl}/${service}/${subService}?`, finalQueryParams);
}
