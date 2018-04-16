'use strict';

const path = require('path');
const webpackConfig = require('../../config/webpack.config.test');
const testGlob = 'src/**/*.spec.js';
const srcGlob = 'src/**/*!(spec|test|stub).js';

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
      [testGlob]: ['webpack', 'sourcemap', 'coverage'],
      [srcGlob]: ['webpack', 'sourcemap', 'coverage']
    },
    reporters: ['mocha', 'coverage', 'remap-coverage'],
    coverageReporter: {
      dir: path.join(__dirname, '../../coverage'),
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text' }
      ]
    },
    remapCoverageReporter: {
      'text-summary': null,
      html: './coverage/html',
      cobertura: './coverage/cobertura.xml'
    },
    autoWatch: false,
    singleRun: true
  }
};
