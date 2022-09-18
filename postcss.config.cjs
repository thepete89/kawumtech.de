const autoprefixer = require("autoprefixer");
const postcssCustomMedia = require('postcss-custom-media');

const config = {
  plugins: [autoprefixer, postcssCustomMedia],
};

module.exports = config;
