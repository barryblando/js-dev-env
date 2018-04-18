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
        use: [ { loader: 'istanbul-instrumenter-loader', options: { esModules: true } } ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
}
