/**
 * This is where you tell the test runner where your files are located. Based on the configuration above my test files are
 * located in root(.) and they all end in .spec.js. The extra boolean flag indicates if you want it to go
 * looking for files in subdirectories under root (.), context.keys contains an array of test files.
 */
const context = require.context('.', true, /\.spec\.js$/);
context.keys().forEach(context);
