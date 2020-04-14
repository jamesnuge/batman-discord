process.env.CHROME_BIN = process.env.CHROME_BIN || require('puppeteer').executablePath();

var path = require('path'),
    dir = path.resolve(__dirname),
    webpackConfig = require('./webpack-test.config.js'),
    shimPath = path.join(dir, 'karma.test.shim.js');

module.exports = function (config) {
    var preprocessors = {};
    preprocessors[shimPath] = ['webpack', 'sourcemap'];

    var _config = {
        basePath: '',

        frameworks: ['mocha', 'es6-shim'],

        files: [
            { pattern: shimPath, watched: false }
        ],

        preprocessors: preprocessors,

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,

        browsers: ['ChromeHeadless']
    };

    config.set(_config);
}
