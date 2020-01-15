const fs = require("fs");
let actual = 0;
fs.readFile(`./cities.csv`, `utf-8`, (error, data) => {
  if (error) throw error;
  let contents = data.split("\n");
  contents.shift();
  actual = contents
    .map((item) => +item.split(`,`)[2])
    .reduce((acc, cur) => acc + cur);
});

module.exports = {
  totalPopulation(onFinished) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof actual === "number") {
          resolve(onFinished(actual));
        } else {
          reject(onFinished("Error!"));
        }
      }, 1000);
    });
  },
};
