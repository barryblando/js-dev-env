/**
 * TESTS WEBPACK CONFIGURATION
 */

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ { loader: 'babel-loader' } ],
      }
    ]
  },
}
