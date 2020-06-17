import Streamster from "Streamster";

const DailyService = Streamster.usgs.daily();

async function getData() {
  try {
    const data = await DailyService.getDailyData({
      format: 'time-series',
      queryParameters: {
        sites: '09361500',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01',
        endDT: '2019-10-09',
      },
    });
    console.table(data)
  } catch(err) {
    console.error(err);
  }
}

getData();
