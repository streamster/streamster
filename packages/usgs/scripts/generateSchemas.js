const { generators } = require('@streamster/core');
const axios = require('axios');
const { generateSchema } = generators;

const dailyUrl =
  'https://waterservices.usgs.gov/nwis/dv/?format=json&sites=09361500&startDT=2020-09-01&endDT=2020-09-02&parameterCd=00060&siteStatus=all';

const instantaneousUrl =
  'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=09361500&parameterCd=00060&siteStatus=all';

async function buildSchemas() {
  try {
    const daily = await axios.get(dailyUrl);
    const instantaneous = await axios.get(instantaneousUrl);

    generateSchema('Daily', './src/meta/usgsDailySchema.json', daily.data);
    generateSchema(
      'Instantaneous',
      './src/meta/usgsInstantaneousSchema.json',
      instantaneous.data
    );
  } catch (error) {
    console.error(`error: Schemas could not be generated! ${error});
  }
}
buildSchemas();
