'use strict';

const webpackConfig = require('../../config/webpack.config.test');

module.exports = {
  karma: {
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
    webpack: webpackConfig,
    webpackMiddleWare: { noInfo: true },
    preprocessors: {
      'src/test-context.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: [ 'text', 'lcov' ],
      fixWebpackSourcePaths: true
    },
    autoWatch: false,
    singleRun: true
  }
};
