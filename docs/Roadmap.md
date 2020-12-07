# Roadmap

## To Dos

- Testing
  - [] Create mock data for USGS web service response so I don't have to hit real web services for each test
  - [] write schema auto-generator to validate against for tests (use AJV to validate)
  - [] write tests for utils
  - [] look into test coverage
  - [] develop some sort of isolated browser testing development environment (either a Gatsby site, Storybook, or something along those lines)
- Schema standardization
  - [] develop consistent schema for streamster outputs (i.e. water schema, snow data schema, etc...) (SEE IF A MODULE ALREADY EXISTS FOR THIS)
  - [] write transformer utility to convert response to correct streamster schema/shape (i.e. something like `transform(inputSchema, inputData, outputSchema, outputData))
- Sources
  - [] Snotel
  - [] Mesowest
  - [] Avy Forecasts
  - [] DWR
- Releases/Publishing
  - [] setup CircleCi
  - [] setup license
  - [] setup donation
  - [] promote (i.e. product hunt, hacker news, etc...)
- Docs
  - [] Readme
  - [] Getting Started
  - [] Interactive explorer (maybe storybook?)
  - [] Look into how docs could be auto-generated
  - [] Roadmap
