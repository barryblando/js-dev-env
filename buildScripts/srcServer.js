import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../config/webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// let express use webpack dev middleware
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
