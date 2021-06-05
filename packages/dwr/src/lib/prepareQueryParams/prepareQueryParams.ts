import { LocationSearch, NumericOperators, StringOperators } from '../../types';

/**
 * Lookup table for translating operators into the DWR specific format
 */
const stringFilterOperatorLookup = {
  equal: '{val}',
  startsWith: '{val}*',
  endsWith: '*{val}',
  contains: '*{val}*',
};

/**
 * Valid key lookups
 */
const stringFilterOperators = Object.keys(stringFilterOperatorLookup);
const locationSearchKeys = ['latitude', 'longitude', 'radius', 'units'];

type Acc = { [key: string]: any };
type Curr = [
  string,
  (
    | string
    | number
    | { [key in StringOperators]: string | number }
    | { [key in NumericOperators]: string | number }
    | LocationSearch
  )
];

/**
 * Reducer used to translate query parameters from an object format
 * into a string query parameter format as required by the DWR web services
 * If the current query parameter is an object, we want to translate the associated
 * operators (i.e. 'contains', 'min', 'max') into the appropriate query string
 * representation (i.e. { contains: 'ANI' } becomes '*ANI*')
 * There is a separate logic for translating string and numeric operators
 * If the provided query parameter value is not an object, we just want to
 * return it as is
 */
function reducer(acc: Acc, curr: Curr) {
  const [field, filter] = curr;
  if (typeof filter === 'object') {
    const conditions = Object.entries(filter);
    conditions.forEach(condition => {
      const [operator, value] = condition;
      if (stringFilterOperators.includes(operator)) {
        acc[field] = stringFilterOperatorLookup[
          operator as StringOperators
        ].replace('{val}', value as string);
      } else if (locationSearchKeys.includes(operator)) {
        acc[operator] = value;
      } else {
        if (operator === 'min' || operator === 'max') {
          acc[`${operator}-${field}`] = value;
        } else {
          acc[field] = value;
        }
      }
    });
  } else {
    if (field === 'modified') {
      acc['min-modified'] = filter;
    } else {
      acc[field] = filter;
    }
  }
  return acc;
}

/**
 * Utility used to take DWR query parameters expressed in the standard
 * Streamster object schema and translate to the DWR specific query parameter format
 * @param queryParameters
 * @returns {object} finalQueryParameters Translated query parameters
 */
export function prepareQueryParams<T>(queryParameters: T) {
  const entries = Object.entries(queryParameters);
  return entries.reduce(reducer, {});
}
