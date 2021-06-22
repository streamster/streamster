require("dotenv").config();
const chalk = require("chalk");

const statusColorLookup = {
  error: "red",
  success: "green",
  info: "cyan",
  start: "blue",
};

const statusLookup = {
  error: "Error",
  success: "Finished",
  info: "Info",
  start: "Started",
};

const nonDebugKeys = ["success", "error"];

const { debug } = process.env;

class Analytics {
  log(status, message) {
    const color = chalk[statusColorLookup[status]];
    const prettyStatus = statusLookup[status];
    if (!debug && nonDebugKeys.includes(status)) {
      // eslint-disable-next-line
      console.log(color(prettyStatus), message);
    } else if (debug) {
      // eslint-disable-next-line
      console.log(color(prettyStatus), message);
    }
    return this;
  }
}

module.exports = Analytics;
