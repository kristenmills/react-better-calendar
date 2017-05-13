const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: path.resolve(__dirname, '../src/css/')
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
