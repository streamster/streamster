# Streamster

> :warning: Streamster is still very much a work in progress. Features and implementations are likely to change.

Streamster is a JavaScript library designed to make working with natural resource related APIs simpler. There are a slew of awesome public APIs out there for things like water, air, and snow, but they all vary significantly in terms of ease of use. The aim of this library is to:

- develop a more standardized way of interfacing with these APIs
- return data in as consistent a format as possible from these APIs so they can easily used by other applications
- make available a number of utilities I have developed while working on Streamster.

## Getting Started

There are a number of packages available through Streamster. To get started with one, please reference the linked instructions below.

### Available Packages

- [**@streamster/usgs**](https://github.com/streamster/streamster/blob/master/packages/usgs/README.md):
  - package used to access the USGS Water Services (https://waterservices.usgs.gov/)
- [**@streamster/coyote**](https://github.com/streamster/streamster/tree/master/packages/coyote):
  - package used to transform data structure to match a provided schema
- **@streamster/core**:
  - utilities shared between packages

## Roadmap

- [x] Coyote - data transformation utility
- [ ] USGS Water Services
  - [x] Daily service
  - [x] Instantaneous service
  - [ ] Site service
- [ ] National Water Quality Monitoring Council - Water Quality Data
- [ ] Avalanche.org Forecasts
- [ ] NRCS SNOTEL Services
- [ ] Reservoir levels
