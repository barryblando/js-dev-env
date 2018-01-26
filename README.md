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
| lint                        | Lints webpack.config.*, src and buildScripts folder                                                       |
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
1. Make sure you're running the latest version of Node. Or, use [Node 9.3.0](https://nodejs.org/en/download/releases/) if you're having issues on Windows. Node 7 has issues on some Windows machines.
1. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
1. Don't run the project from a symbolic link. It will cause issues with file watches.
1. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
1. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and kill the other instance using Ctrl+C.
1. Nothing above work? Delete your node_modules folder and re-run npm install.

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
| file-loader                 | Adds file loading support to Webpack                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| mocha                       | JavaScript testing library                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| open                        | Open app in default browser                                                                               |
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

## Testing Environment

1. Karma - Test Runner [TBF]

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
