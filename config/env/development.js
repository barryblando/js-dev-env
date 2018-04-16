'use strict';

const webpackConfig = require('../../config/webpack.config.test');

const testGlob = 'src/**/*.spec.js';
const srcGlob = 'src/**/*!(spec|test|stub).js';

module.exports = {
  karma: {
    webpack: webpackConfig,
    webpackMiddleWare: { noInfo: true },
    preprocessors: {
      [testGlob]: ['webpack'],
      [srcGlob]: ['webpack'],
    },
    reporters: ['mocha'],
    coverageReporter: false,
    browsers: ['PhantomJS'],
    customLaunchers: false,
    autoWatch: true,
    singleRun: false
  }
};
