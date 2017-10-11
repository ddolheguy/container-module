'use strict';
const generateConfig = require('container-wrapper/src/webpack.app.config');
const webpackConfig = generateConfig(__dirname);

module.exports = webpackConfig;