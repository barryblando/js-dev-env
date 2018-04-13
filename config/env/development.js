'use strict';

// const webpackConfig = require('../../config/webpack.config.dev');

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
    // webpack: webpackConfig,
    // webpackMiddleWare: { noInfo: true },
    preprocessors: {
      'src/**/*.js': ['babel'],
      'src/**/*.spec.js': ['babel'],
    },
    reporters: ['progress'],
    coverageReporter: false,
    autoWatch: true,
    singleRun: false
  }
};
