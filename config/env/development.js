'use strict';

const webpackConfig = require('../../config/webpack.config.test');

module.exports = {
  karma: {
    webpack: webpackConfig,
    webpackMiddleWare: { noInfo: true },
    preprocessors: {
      'src/**/*.spec.js': ['babel', 'webpack'],
      'src/**/*.js': ['babel', 'webpack'],
    },
    reporters: ['progress'],
    coverageReporter: false,
    browsers: ['PhantomJS'],
    customLaunchers: false,
    autoWatch: true,
    singleRun: false
  }
};
