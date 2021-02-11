# @streamster/usgs

> Streamster is still very much a work in progress. Features and implementations are likely to change.

Firstly, a big thanks to the folks over at USGS for all of their hardwork in developing their Water Services. Much much appreciated!

@streamster/usgs is a JavaScript library designed to make working with the USGS Water Services significantly easier. Currently, the package provides a way to easily query the **Daily** and **Instantaneous** services. The data can be returned from the service as is or re-structured to a more friendly time-series format that is easy to display in a table or chart.

## Getting Started

To install the package

```bash
# yarn
yarn add @streamster/usgs

# npm
npm install @streamster/usgs
```

## Usage

```js
const data = daily
  .getDailyData({
    format: 'time-series',
    queryParameters: {
      stateCd: 'co',
      siteStatus: 'active',
      parameterCd: '00060',
      startDT: '2019-10-01',
      endDT: '2019-10-02',
    },
  })
  .then(data => {
    // do something with the data!
  })
  .catch(err => {
    console.error(err);
  });
```
