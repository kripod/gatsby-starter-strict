const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [atImport(), postcssPresetEnv()],
};
