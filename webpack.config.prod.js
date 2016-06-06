var webpack = require('webpack');
var common = require('./webpack.config.common');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var CleanPlugin = require('clean-webpack-plugin');

var outputPath = 'export';

module.exports = merge(common, {
    plugins: [
        new CleanPlugin(outputPath),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            __SERVER__: false,
            __DEVELOPMENT__: false,
            __DEVTOOLS__: false
        })
    ],
    debug: false,
    output: {
        filename: '[name]-[hash].js',
        path: outputPath
    }
});
