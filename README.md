<h1 align=center>
  <a href="https://github.com/barryblando/js-dev-env" title="JS-DEV-ENV">
    <img alt="JS-DEV-ENV" src="https://www.yld.io/images/svgs/js_logo.svg">
  </a>
  <br>
  Javascript Development Environment - StarterKit
</h1>

<p align=center>
<a href="https://ci.appveyor.com/project/barryblando/js-dev-env">
<img src="https://ci.appveyor.com/api/projects/status/3njf165y3xjvvv1k?svg=true">
</a>

<a href="https://travis-ci.org/barryblando/js-dev-env">
<img src="https://travis-ci.org/barryblando/js-dev-env.svg?branch=master">
</a>

<a href="https://coveralls.io/github/barryblando/js-dev-env?branch=master">
<img src="https://coveralls.io/repos/github/barryblando/js-dev-env/badge.svg?branch=master">
</a>

</br>

<a href="https://david-dm.org/barryblando/js-dev-env">
<img src="https://david-dm.org/barryblando/js-dev-env/status.svg">
</a>

<a href="https://david-dm.org/barryblando/js-dev-env?type=dev">
<img src="https://david-dm.org/barryblando/js-dev-env/dev-status.svg">
</a>

<a href="https://snyk.io/test/github/barryblando/js-dev-env">
<img src="https://snyk.io/test/github/barryblando/js-dev-env/badge.svg">
</a>

</br>
<a href='https://dependencyci.com/github/barryblando/js-dev-env'><img src='https://dependencyci.com/github/barryblando/js-dev-env/badge' alt='Dependency Status'></a>

</p>

## Get Started

1. **Install [Node 9](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) and Yarn.
1. **Clone this repository.** - `git clone https://github.com/barryblando/js-dev-env.git` or [download the zip](https://github.com/barryblando/js-dev-env/archive/master.zip)
1. **Make sure you're in the directory you just created.** - `cd js-dev-env`
1. **Install Node Packages.** - `yarn install`
1. **Run the app.** - `yarn start -s` This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Scripts

| **Scripts**                 | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| prestart                    | Starting Message                                                                                          |
| start                       | Will run all development scripts in parallel mode                                                         |
| open:src                    | Runs Source Server                                                                                        |
| lint                        | Lints config, src ,and buildScripts folder                                                                |
| lint:watch                  | Watches Linted Files and Folders                                                                          |
| security-check              | Checks packages for vulnerabilities                                                                       |
| localtunnel                 | Static hosting w/o Firewall                                                                               |
| coverage                    | Code coverage using istanbul                                                                              |
| coveralls                   | Test Coverage History & Statistics                                                                        |
| share                       | Shares srcServer using localtunnel                                                                        |
| test                        | Tests all *.test.js files using Mocha                                                                     |
| test:watch                  | Watches all tests files                                                                                   |
| generate-mock-data          | Generate Schema using JSON Schema Faker                                                                   |
| prestart-mockapi            | Runs generate-mock-data first before starting JSON Server                                                 |
| start-mockapi               | Runs JSON Server for Development Environment                                                              |
| clean-dist                  | Cleans dist folder for Production Build                                                                   |
| prebuild                    | Runs Cleans dist, Watch Test Files and Lint Files First                                                   |
| build                       | Production Build                                                                                          |
| postbuild                   | Runs Dist Server                                                                                          |
| deploy                      | Deploy Dist using Surge and API to Heroku for Test                                                        |

## Issues

**Having Issues?** Try these things first:

1. Run `yarn install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure you're running the latest version of Node. Or, use [Node 9.8.0](https://nodejs.org/en/download/releases/) if you're having issues on Windows.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and follow this steps: [INFO](https://stackoverflow.com/questions/39632667/how-to-kill-a-currently-using-port-on-localhost-in-windows)

  ```ExpressServer
  Kill a currently using port on localhost in windows? When Dev Server F*cks Up.

  Step one: [Terminal]

  netstat -ano | findstr :yourPortNumber (Sample 9000)

    TCP    127.0.0.1:9000         0.0.0.0:0              LISTENING       8920 <== PID
    TCP    127.0.0.1:58337        127.0.0.1:9000         TIME_WAIT       0
    TCP    127.0.0.1:58338        127.0.0.1:9000         TIME_WAIT       0

  Step two:

  taskkill //PID typeyourPIDhere //F

  (double slashes are needed and //F forcefully terminates the process)
  ```

7. Nothing above work? Delete your node_modules folder and re-run `yarn install`.

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to Browser Compatibility                                    |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-env            | Babel preset for running all the latest standardized JavaScript features                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| chai                        | Tool to verify that things are correct. TDD Assertion Lib.                                                |
| chalk                       | Terminal string styling done right                                                                        |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| circular-dependency-plugin  | Detect modules with circular dependencies when bundling with webpack.                                     |
| compression                 | Compress Production Bundle JS file as its finest                                                          |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill        | Polyfill to support hot reloading in IE                                                                   |
| expect                      | Assertion library for use with Mocha                                                                      |
| express                     | Serves development and production builds                                                                  |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| istanbul                    | Install if you want to try script coverage-istanbul otherwise use Karma Coverage Istanbul                 |
| istanbul-instrumenter-loader| For subsequent code coverage reporting                                                                    |
| file-loader                 | Adds file loading support to Webpack                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| karma                       | A simple tool that allows you to execute JavaScript code in multiple real browsers.                       |
| karma-chai                  | Chai for Karma but Chai still need to install                                                             |
| karma-chrome-launcher       | Launcher for Google Chrome, Google Chrome Canary and Google Chromium.                                     |
| karma-cli                   | Install this module if you want to be able to use karma in your command line.                             |
| karma-cov-istanbul-reporter | A karma reporter that uses the latest istanbul 1.x APIs (with full sourcemap support) to report coverage. |
| karma-mocha                 | Mocha for Karma but Mocha still need to install                                                           |
| karma-mocha-reporter        | Karma reporter plugin with mocha style logging                                                            |
| karma-sourcemap-loader      | Preprocessor that locates and loads existing source maps. Production Test.                                |
| karma-webpack               | Use webpack to preprocess files in karma                                                                  |
| mocha                       | JavaScript testing library                                                                                |
| nock                        | An HTTP mocking and expectations library for Node.js                                                      |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| open                        | Open app in default browser                                                                               |
| puppeteer                   | Node library which provides a HiLvl API to control headless Chrome or Chromium over the DevTools Protocol.|
| rimraf                      | Delete files                                                                                              |
| style-loader                | Add Style support to Webpack and Act as Fallback If Anything Happens to CSS Loader                        |
| css-loader                  | Load CSS                                                                                                  |
| sass -loader                | Loads a SASS/SCSS file and compiles it to CSS                                                             |
| node-sass                   | Sass Compiler                                                                                             |
| uglifyJS                    | JS Parser, Compressor, Minifier                                                                           |
| url-loader                  | Add url loading support to Webpack                                                                        |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |

## Webpack & Webpack HMR

- [Webpack - The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
- [Webpack & Hot Module Replacement [HMR]](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg)

## Testing Environment

1. Karma - TDD Test Runner

## Testing Frameworks

Testing frameworks are used to organize and execute tests.
Mocha and Jasmine are two popular choices (and they're actually kinda similar). I used Mocha.

## Assertion Libraries

Assertion libraries are tools to verify that things are correct.
This makes it a lot easier to test your code, so you don't have to do thousands of if statements. I used Chai.

## Helper Libraries

1. JSDOM Provides In-Memory DOM
1. Cheerio Provides jQuery-like interface for querying the DOM

## Continuous Integration Server

1. Travis CI - Linux Version
1. Appveyor -  Windows Version

## Error Tracker

1. Sentry

## Contributions & Enhancement

- Contributions & Enhancements are open and don't forget to credit me. Thank you.