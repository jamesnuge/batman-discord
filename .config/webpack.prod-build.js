const prodConfig = require('@5b1/common-web').webpack.prod,
    webpackMerge = require('webpack-merge'),
    options = require('./options');

module.exports = webpackMerge(prodConfig(options), {
    entry: {
        build: "./src/app.ts"
    },
    output: {
        filename: "./dist/app.js"
    }
});
