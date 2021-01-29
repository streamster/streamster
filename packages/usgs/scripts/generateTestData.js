const fs = require('fs');
const axios = require('axios');
const { dailyUrl, instantaneousUrl } = require('./constants');

const dailyPath = './src/meta/usgsDailyData.json';
const instantaneousPath = './src/meta/usgsInstantaneousData.json';

async function buildTestData() {
  try {
    const daily = await axios.get(dailyUrl);
    const instantaneous = await axios.get(instantaneousUrl);

    if (fs.existsSync(dailyPath)) {
      fs.unlinkSync(dailyPath);
    }

    if (fs.existsSync(instantaneousPath)) {
      fs.unlinkSync(instantaneousPath);
    }

    fs.writeFileSync(dailyPath, JSON.stringify(daily.data));
    fs.writeFileSync(instantaneousPath, JSON.stringify(instantaneous.data));
    console.log('success: Test data generated!');
  } catch (error) {
    console.error(`error: Test data could not be generated! ${error}`);
  }
}
buildTestData();
