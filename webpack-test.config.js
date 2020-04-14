const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const ROOT = path.resolve( __dirname, 'src' );

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            // LOADERS
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'ts-loader'
            }
        ]
    }
};

