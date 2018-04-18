// Karma configuration
// Generated on Fri Apr 13 2018 10:08:09 GMT+0800 (DST)

process.env.CHROME_BIN = require('puppeteer').executablePath();

const appConfig = require('./config/index');

module.exports = config => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'babel-preset-env',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha-reporter',
      'karma-coverage-istanbul-reporter'
    ],

    // list of files / patterns to load in the browser
    files: ['src/test-context.js'],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: appConfig.karma.preprocessors,
    webpack: appConfig.karma.webpack,
    webpackMiddleWare: appConfig.karma.webpackMiddleWare,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: appConfig.karma.reporters,

    // autoWatch: first run will have the full output and the next runs just output the summary and errors in mocha style
    // https://www.npmjs.com/package/karma-mocha-reporter
    mochaReporter: {
      output: 'autowatch'
    },

    // Coverage Report
    coverageIstanbulReporter: appConfig.karma.coverageIstanbulReporter,

    // web server port
    port: 3000,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: appConfig.karma.browsers,
    customLaunchers: appConfig.karma.customLaunchers,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: appConfig.karma.autoWatch,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: appConfig.karma.singleRun,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
