// module.exports = {
//   server: {
//     command: "yarn start",
//     port: 3000,
//     launchTimeout: 100000,
//     debug: true,
//   },
// };

// jest-puppeteer.config.js
module.exports = {
  server: {
    command: 'PORT=4444 yarn start',
    debug:true
  },
}