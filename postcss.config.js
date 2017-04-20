const precss = require('precss');
const autoprefixer = require('autoprefixer');
const short = require('postcss-short');

module.exports = {
  plugins: [
    precss,
    autoprefixer,
    short,
  ],
};
