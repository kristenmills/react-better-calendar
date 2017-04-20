const path = require('path');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./src/js'),
      path.resolve('./demo/src/'),
      path.resolve('./demo/src/js'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
