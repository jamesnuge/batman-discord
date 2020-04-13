const path = require('path'),
    root = path.resolve(__dirname, '..'),
    modulesRoot = path.resolve(root, 'node_modules'),
    webpackConfig = require('@5b1/common-web').webpack;

module.exports = webpackConfig.test({ root, modulesRoot });
