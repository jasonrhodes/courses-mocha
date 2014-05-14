var fs = require("fs");

function getConfig() {
  return JSON.parse(fs.readFileSync(process.cwd() + "/config.json").toString());
}

module.exports = function () {

  var palette = getConfig().palette;

  if (!Array.isArray(palette)) {
    throw new Error("Palette is not an array");
  }

  return palette;

};
