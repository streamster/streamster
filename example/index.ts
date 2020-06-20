import Streamster from "Streamster";

const DailyService = Streamster.usgs.daily();
const dwrSurfaceWaterService = Streamster.dwr.surfaceWater();


async function getData() {
  try {
    const usgsData = await DailyService.getDailyData({
      format: 'time-series',
      queryParameters: {
        sites: '09361500',
        siteStatus: 'active',
        parameterCd: '00060',
        startDT: '2019-10-01',
        endDT: '2019-10-09',
      },
    });
    console.log("USGS",usgsData);

    const dwrData = await dwrSurfaceWaterService.getSurfaceWaterStations({
      format: 'json',
      queryParameters: {
        abbrev: ["equal to", 'ELBCASCO']
      },
    });
    console.log("DWR",dwrData);
  } catch(err) {
    console.error(err);
  }
}

getData();
