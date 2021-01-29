# Roadmap

## To Dos

- Testing
  - [x] Create mock data for USGS web service response so I don't have to hit real web services for each test
  - [x] write schema auto-generator to validate against for tests (use AJV to validate)
  - [x] write tests for utils
  - [ ] look into test coverage
  - [ ] develop some sort of isolated browser testing development environment (either a Gatsby site, Storybook, or something along those lines)
- Schema standardization
  - [ ] develop consistent schema for streamster outputs (i.e. water schema, snow data schema, etc...) (SEE IF A MODULE ALREADY EXISTS FOR THIS)
  - [ ] write transformer utility to convert response to correct streamster schema/shape (i.e. something like `transform(inputSchema, inputData, outputSchema, outputData))
  ```js
  // potentially something like this that would
  // not sure if this is the best way to do it though
  const usgsDailySchemaMap = {
    date: "data.timeSeries.values.dateTime",
    site: "data.sourceInfo.siteName",
    //...
  };
  ```
- Sources
  - [ ] Snotel
  - [ ] Mesowest
  - [ ] Avy Forecasts
  - [ ] DWR
- Releases/Publishing
  - [ ] setup CircleCi
  - [ ] setup license
  - [ ] setup donation
  - [ ] promote (i.e. product hunt, hacker news, etc...)
- Docs
  - [ ] Readme
  - [ ] Getting Started
  - [ ] Interactive explorer (maybe storybook?)
  - [ ] Look into how docs could be auto-generated
  - [ ] Roadmap
