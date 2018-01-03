import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  target: 'web', // or node for node app
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  plugins: [

  ]
}
