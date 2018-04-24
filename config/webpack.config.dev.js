/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, '../src/index.js')
  ],
  target: 'web', // or node for node app
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    open: true,
    openPage: '', // <== Add this
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false // show a warning when there is a circular dependency
    })
  ]
}
