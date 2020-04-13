const prodConfig = require('@5b1/common-web').webpack.prod,
    options = require('./options');

module.exports = prodConfig(options);
