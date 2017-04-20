const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.shared');

webpackConfig.entry.main = [
  './demo/src/js/app.jsx',
  'webpack-dev-server/client?http://localhost:5000',
];
webpackConfig.output = {
  path: __dirname,
  filename: '[name].bundle.js',
  publicPath: '/',
};
webpackConfig.devtool = 'source-map';
webpackConfig.plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    title: 'React Calendar Demo',
    template: './demo/src/index.ejs',
  }),
];
webpackConfig.module.rules.push({
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'postcss-loader'],
});

webpackConfig.devServer = {
  contentBase: './demo/src',
  port: 5000,
  hot: true,
  historyApiFallback: true,
};

module.exports = webpackConfig;
