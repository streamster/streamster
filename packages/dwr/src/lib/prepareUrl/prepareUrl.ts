import { generators } from '@streamster/core';
import { prepareQueryParams } from '../prepareQueryParams';
import { Services, SubServices } from '../../types';

const { constructUrl } = generators;

const baseUrl = 'https://dwr.state.co.us/Rest/GET/api/v2';

const validServices = 'surfacewater';
const validSubServices = 'surfacewaterstations';

/**
 * Generates a request URL to the daily service endpoint using the user
 * provided query parameters
 * @returns {string} API url
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
