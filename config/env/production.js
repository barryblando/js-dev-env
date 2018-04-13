'use strict';

const path = require('path');
// const webpackConfig = require('../../config/webpack.config.prod');

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
      'src/**/*.js': ['babel', 'coverage'],
      'src/**/*.spec.js': ['babel', 'coverage'],
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: path.join(__dirname, '../../coverage'),
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
    autoWatch: false,
    singleRun: true
  }
};
