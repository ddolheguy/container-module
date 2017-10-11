'use strict';
const generateConfig = require('container-wrapper/src/webpack.base.lib.config');
const packageFile = require('./package.json');

const webpackConfig = generateConfig(packageFile, {
    'myModule': './src/mymodule/index.js'
}, __dirname);
module.exports = webpackConfig;