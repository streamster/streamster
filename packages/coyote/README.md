# @streamster/coyote

> :warning: @streamster/coyote is still very much a work in progress. Features and implementations are likely to change.

A wiley, shapeshifting data transformation utility.

The aim of coyote is to make the process of programmatically transforming an input data set to match a desired output structure much simpler. The need for this package arose when I started working with the USGS Water Services. 

## Getting Started

To install the package

```bash
# yarn
yarn add @streamster/coyote

# npm
npm install @streamster/coyote
```

## Usage

Coyote currently only exports the `transform` function, but I am guessing this will change down the road. Usage is relatively straightforward. You just need to provide a `data` and `schema` argument like in the example below. Pass the data that you would like to transform to the `data` argument. This can be an object or array. The `schema` argument expects an object with the desired property names and mappings for each object that is output by `transform`. 

Using the `schema` in the example below, you can see that we want the `transform` function return an array of objects with the fields `date`, `siteId`, `siteName`, `parameter`...you get the idea. The value for each of these keys in the schema object represents where coyote needs to grab the associated value from in the source dataset. The string value follows the JavaScript Object Dot Notation with one very important exception. If the property you are accessing is an array and you need to iterate over it, you will need to place an `*` after the property name that will be iterated over. For example `results.*.location` will traverse the source data up until it hits the `results` property at which point it will loop through it and grab the value for the `location` property from each array item. This is difficult to explain but easier to show.

```js
import { transform } from '@streamster/coyote';

// some mock source data to transform
const sourceData = {
  meta: {
    datasetName: 'Some Imaginaray Dataset',
    organization: 'Streamster',
    resultCount: 2
  },
  results: [
    { id: 1, date: '2021-02-10T14:24:29.909Z', location: 'LL-1', resultValue: 12 },
    { id: 2, date: '2021-02-12T14:24:29.909Z', location: 'LL-1', resultValue: 14 }
  ]
};

// define our desired output format and map our fields
// to fields in the source data
const transformSchema = {
  id: 'results.*.id',
  date: 'results.*.date',
  siteName: 'results.*.location',
  value: 'results.*.resultValue',
  organization: 'meta.organization'
};

const data = transform({
  data: sourceData,
  schema: transformSchema,
});

// data will yield
//  [
//    { 
//      id: 1, 
//      date: '2021-02-10T14:24:29.909Z', 
//      siteName: 'LL-1', 
//      value: 12, 
//      organization: 'streamster'
//    },
//    { 
//      id: 1, 
//      date: '2021-02-12T14:24:29.909Z', 
//      siteName: 'LL-1', 
//      value: 14, 
//      organization: 'streamster'
//    }

```
