import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// let express use webpack dev middleware
app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard Coding for Simplicity. Pretend this hits a real database (Mimic)
  res.json([
    {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bob@gmail.com'},
    {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email': 'tnorton@yahoo.com'},
    {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email': 'lee.tina@hotmail.com'},
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
