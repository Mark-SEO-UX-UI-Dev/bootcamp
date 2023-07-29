const os = require("os");

function displayMemoryInfo() {
  const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
  const freeMemory = os.freemem() / 1024 / 1024 / 1024;

  console.log(`${freeMemory.toFixed(2)} GBs / ${totalMemory.toFixed(2)} GBs`);
}

function startMemoryInfoInterval() {
  setInterval(displayMemoryInfo, 1000);
}

module.exports = {
  startMemoryInfoInterval,
};
