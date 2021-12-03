module.exports = {
  server: {
    command: 'yarn start',
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
  launch: {
    headless: false,
  },
  browserContext: 'default',
};
