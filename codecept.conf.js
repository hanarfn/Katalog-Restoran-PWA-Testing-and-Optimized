exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1200x900',
      waitForAction: 2000,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'Katalog Restoran PWA + Testing and Optimized',
};
