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

@streamster/usgs currently supports the USGS Daily Values and USGS Instantaneous Values service. Like the name implies, the daily service allows you to retrieve aggregated daily values for a variety of parameters for any USGS stream gage. The instantaneous service allows you to retrieve data collected at 15 minute intervals for a variety of parameters for any USGS stream gage. If this sounds like a whole lot of mumbo jumbo to you, I recommend taking a gander at the [USGS Water Services home page](https://waterservices.usgs.gov/).

### Using the Daily Service

You can use the daily service to return aggregated data for any USGS stream gage. The `getDailyData()` accepts every valid query argument that the USGS service supports. The argument names are identical to those in the USGS service so if they use the key `stateCd` to represent the state to filter on, `stateCd` will be the filter key in streamster as well. For a full list of supported arguments, please reference the [USGS Documentation](https://waterservices.usgs.gov/rest/DV-Service.html).

You can choose to return the data in its raw format or as a tidy time series suitable for plotting in a chart or tabular format. To return the raw data, pass `raw` as the argument to the `format` property. To return the data in a time series format, pass `time-series` as the argument to the `format` property. 

You can also use the USGS Instantaneous Value Service Test Tool to explore different queries. This can be found at https://waterservices.usgs.gov/rest/DV-Test-Tool.html.


```js
import usgs from '@streamster/usgs`;

// initialize an instance of the daily service
const daily = usgs.daily()

// request the last five days of daily data for all usgs sites in Colorado
// returns data in a tidy time series format
const data = daily
  .getDailyData({
    format: 'time-series',
    queryParameters: {
      stateCd: 'co', // usgs site code
      siteStatus: 'active',
      parameterCd: '00060', // usgs flow parameter code
      startDT: '2020-10-01',
      endDT: '2020-10-05',
    },
  })
  .then(data => {
    // do something with the data!
  })
  .catch(err => {
    console.error(err);
  });
```

### Using the Instantaneous Service

You can use the instantaneous service to return 15 minute data for any USGS stream gage. The `getInstantaneousData()` accepts every valid query argument that the USGS service supports. The argument names are identical to those in the USGS service so if they use the key `stateCd` to represent the state to filter on, `stateCd` will be the filter key in streamster as well. For a full list of supported arguments, please reference the [USGS Documentation](https://waterservices.usgs.gov/rest/IV-Service.html).

You can choose to return the data in its raw format or as a tidy time series suitable for plotting in a chart or tabular format. To return the raw data, pass `raw` as the argument to the `format` property. To return the data in a time series format, pass `time-series` as the argument to the `format` property. 

You can also use the USGS Instantaneous Value Service Test Tool to explore different queries. This can be found at https://waterservices.usgs.gov/rest/IV-Test-Tool.html.

```js
import usgs from '@streamster/usgs`;

// initialize an instance of the daily service
const daily = usgs.daily()

// request the 15 minute data for the last two days of daily data for all usgs sites in Colorado
// returns data in a tidy time series format
const data = daily
  .getInstantaneousData({
    format: 'time-series',
    queryParameters: {
      stateCd: 'co', // usgs site code
      siteStatus: 'active',
      parameterCd: '00060', // usgs flow parameter code
      startDT: '2020-10-01',
      endDT: '2020-10-02',
    },
  })
  .then(data => {
    // do something with the data!
  })
  .catch(err => {
    console.error(err);
  });
```
