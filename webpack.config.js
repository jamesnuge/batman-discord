const path = require('path'),
    nodeExternals = require('webpack-node-externals'),
    DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    entry: {
        'main': './src/main.ts'
    },
    output: {
        filename: '[name].js',
        path: DESTINATION
    },
    resolve: {
        extensions: ['.txs', '.ts', '.js', '.json'],
        modules: [
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: {
                    loader: 'tslint-loader',
                    options: {
                        formatter: 'stylish',
                        emitErrors: true
                    }
                }
            },

            /****************
             * LOADERS
             *****************/
             {
                 test: /\.ts$/,
                 exclude: [ /node_modules/ ],
                 use: 'ts-loader'
             }
        ]
    },

    node: {
        fs: "empty"
    },
    target: 'node',
    externals: nodeExternals()
};

