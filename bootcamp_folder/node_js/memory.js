// const os = require("os");

// function displayMemoryInfo() {
//   const { totalmem, freemem } = os;

//   console.log(
//     "${(freemem() / 1024 / 1024 / 1024).toFixed(2)} GBs / ${(totalmem() / 1024 / 1024 / 1024).toFixed(2)} GBs"
//   );
// }

// function startMemoryInterval() {
//   setInterval(displayMemoryInfo, 1000);
// }

// module.exports = {
//   startMemoryInterval,
// };
const os = require("os");

function displayMemoryInfo() {
  const totalMemory = os.totalmem() / (1024 * 1024 * 1024);
  const freeMemory = os.freemem() / (1024 * 1024 * 1024);

  console.log(`${freeMemory.toFixed(2)} GBs / ${totalMemory.toFixed(2)} GBs`);
}

function startMemoryInfoInterval() {
  setInterval(displayMemoryInfo, 1000);
}

module.exports = {
  startMemoryInfoInterval,
};
