var webpack = require('webpack');
var common = require('./webpack.config.common');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });

module.exports = merge(common, {
    output: {
        filename: 'bundle.js'
    },
    devtool: 'eval-cheap-module-source-map',
    debug: true,
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        })
    ]
});
