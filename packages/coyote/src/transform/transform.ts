import { get } from 'lodash';

export type TransformArgs = {
  data: Rec | Rec[];
  iterators?: string[];
  schema: any;
};

export type Rec = {
  [key: string]: any;
};

export type SchemaEntry = [string, any];

const iteratorChar = '.*.';

const getIterators = (schema: Rec): string[] => {
  const schemaEntries = Object.entries(schema);
  const schemaValues: string[][] = schemaEntries.map(([_, value]) => {
    if (!value.includes(iteratorChar)) return [];
    const splitValues: string[] = value.split(iteratorChar);
    splitValues.pop();
    return splitValues;
  });
  const flat = schemaValues.flat();
  return flat.length > 0 ? Array.from(new Set(schemaValues.flat())) : ['*'];
};

/**
 * Generates an object that has all of the keys specified
 * in the provided schema map with their initial values set
 * to null.
 * @param {array} schemaEntries provided schema map in entries format
 * @returns {object} returns an object with specified keys
 * @example
 * // will yield { location: null, dateTime: null }
 * createRecordTemplate([['location', 'data.location'], ['dateTime', 'data.date']])
 */
const createRecordTemplate = (schemaEntries: SchemaEntry[]) => {
  return schemaEntries.reduce((acc: Rec, curr: SchemaEntry) => {
    acc[curr[0]] = null;
    return acc;
  }, {});
};

/**
 * Fills a provided record with values from the dataset using a
 * provided record, record template, and a schema map in entries format
 * @param {object} record record where the values should be pulled from
 * @param {object} recordTemplate defines the shape of the outputted object
 * @param {array} schemaEntries maps the provided record to the provided template
 * @returns {object} returns a populated record
 */
const fillRecord = (
  record: Rec,
  recordTemplate: Rec,
  schemaEntries: SchemaEntry[]
) => {
  const base = { ...recordTemplate };
  schemaEntries.forEach((group: SchemaEntry) => {
    base[group[0]] = get(record, group[1], null);
  });
  return base;
};

//TODO add config checks and throw errors
/** */
const transform = ({ data, iterators = ['*'], schema }: TransformArgs): any => {
  if (!data) {
    throw new Error(
      "Error: No data provided. We can't transform the data if there's no data to transform!"
    );
  }

  if (!schema) {
    throw new Error(
      "Error: No schema provided. We can't transform the data unless you tell how us it should be transformed!"
    );
  }

  const parsedIterators =
    iterators[0] === '*' ? getIterators(schema) : iterators;

  /**
   * means we have either moved through every iterator
   * or one was not provided,
   * either way return data as is
   */
  if (parsedIterators.length === 0) return data;

  const currIterator = parsedIterators[0];
  const nextIterator = parsedIterators[1];

  // convert schema map to entries format
  const schemaEntries = Object.entries(schema);

  // generate a template record that resembles the desired final format
  const recordTemplate = createRecordTemplate(schemaEntries);

  // grab our records to iterate through
  // if already is array, return data,
  // else grab the array using the current iterator
  const records = Array.isArray(data) ? data : get(data, currIterator, null);

  /**
   * now that we have grabbed the data to iterate through,
   * update our schema mappings and remove the selector so that we are grabbing
   * values relative to the new root
   * if the schema map item doesn't contain the selector, do nothing
   * logic only runs if the current iterator is not '*' aka all
   */

  let newSchema: SchemaEntry[] = Object.entries(schema);

  // TODO improve this logic here
  // update the schema if we have a real iterator
  // if we do have an iterator cut it out, including the '.*.'
  // if it is a non iterator key, just replace it like normal
  if (currIterator !== '*') {
    newSchema = schemaEntries.map((schema: SchemaEntry) => {
      if (schema[1].includes(currIterator)) {
        if (schema[1].includes(iteratorChar)) {
          return [
            schema[0],
            schema[1].replace(`${currIterator}${iteratorChar}`, ''),
          ];
        } else {
          return [schema[0], schema[1].replace(`${currIterator}.`, '')];
        }
      }
      return [schema[0], schema[0]];
    });
  }

  /**
   * Loop through the array of data we grabbed in the previous step
   * First generate a filled record using the record template
   * If there are still iterators remaining, make sure that data gets
   * appended to filled record.
   * We will keep calling the transform function recursively until all the
   * iterators have been run through
   */
  const parsedRecords = records.map((rec: Rec) => {
    const filledRec = fillRecord(rec, recordTemplate, newSchema);
    if (!nextIterator) return filledRec;
    const remainingData = get(rec, nextIterator, null);
    return remainingData.map((d: any) => ({
      ...filledRec,
      ...d,
    }));
  });

  // remove the current iterator from the list of iterators
  const remainingIterators = [...parsedIterators];
  remainingIterators.shift();

  /**
   * Keep the recursion train going until we have moved through all of
   * the iterators and mapped every field
   * Make sure we are passing a flattened array of data to the function
   */
  return transform({
    data: parsedRecords.reduce((acc: any[], val: any[]) => [...acc, ...val]),
    iterators: remainingIterators,
    schema: Object.fromEntries(newSchema),
  });
};

export default transform;
