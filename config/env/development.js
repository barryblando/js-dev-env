'use strict';

const webpackConfig = require('../../config/webpack.config.test');

module.exports = {
  karma: {
    webpack: webpackConfig,
    webpackMiddleWare: { noInfo: true },
    preprocessors: {
      'src/test-context.js': ['webpack']
    },
    reporters: ['mocha'],
    coverageReporter: false,
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      },
    },
    autoWatch: true,
    singleRun: false
  }
};
