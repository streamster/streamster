const { generators } = require('@streamster/core');
const axios = require('axios');
const { dailyUrl, instantaneousUrl } = require('./constants');
const { generateSchema } = generators;

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
    console.error(`error: Schemas could not be generated! ${error}`);
  }
}
buildSchemas();
