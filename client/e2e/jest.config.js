module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  globals: {
    testingURL: 'http://localhost:3000',
  },
  transform: {
    '\\.js$': 'react-scripts/config/jest/babelTransform',
  },
  reporters: ['default', ['jest-junit', { outputName: 'test-results.xml' }]],
};
