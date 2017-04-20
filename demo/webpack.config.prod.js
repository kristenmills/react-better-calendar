const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.shared');

webpackConfig.entry.main = './demo/src/js/app.jsx';
webpackConfig.output = {
  path: path.resolve('./demo/dist/assets'),
  filename: '[name].[chunkhash].js',
  publicPath: 'react-calendar/assets/',
};
webpackConfig.plugins = [
  new CleanWebpackPlugin(['demo/dist'], {
    root: process.cwd(),
    exclude: ['index.html'],
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'manifest'], minChunks: Infinity }),
  new webpack.optimize.CommonsChunkPlugin({ async: true, minChunks: 2 }),
  new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 8192 }),
  new HtmlWebpackPlugin({
    title: 'React Calendar Demo',
    filename: '../index.html',
    template: './demo/src/index.ejs',
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new InlineChunkWebpackPlugin({
    inlineChunks: ['manifest'],
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
    sourceMap: false,
  }),
  new ExtractTextPlugin({
    filename: '[name].[chunkhash].css',
    allChunks: true,
  }),
];
webpackConfig.module.rules.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(['css-loader', 'resolve-url-loader', 'sass-loader']),
});

module.exports = webpackConfig;
