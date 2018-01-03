// This file isn't transpile/d, so must use CommonJS and ES5

// Register babel to transpile our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand. If it see .css it will just treat it as empty function.
require.extensions['.css'] =  function() {};
