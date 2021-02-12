const fs = require("fs");
const usgs = require("@streamster/usgs").default;
const daily = usgs.daily();

daily
  .getDailyData({
    format: "time-series",
    queryParameters: {
      countyCd: "08031",
      siteStatus: "active",
      parameterCd: "00060",
      startDT: "2018-10-01",
      endDT: "2021-02-11",
    },
  })
  .then((data) => {
    fs.writeFileSync("playground.output.json", JSON.stringify(data));
    console.log(data);
  });
