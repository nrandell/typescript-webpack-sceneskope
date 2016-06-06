var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    entry: './src/index.ts',
    output: {
        path: 'builds',
        publicPath: '',
        chunkFilename: '[name]-[chunkhash].js',
        pathInfo: true
    },
    module: {
        preLoaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'tslint',
                exclude: /node_modules/
            }
        ],
        loaders: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015!ts-loader'
        },{
            test: /\.scss/,
            loader: ExtractPlugin.extract('style', 'css!sass')
        },{
            test: /\.(png|gif|jpe?g|svg)$/i,
            loaders: [
                'url?limit=10000',
                'image-webpack'
            ]
        },{
            test: /\.html/,
            loader: 'html'
        }]
    },
    imageWebpackLoader: {
        bypassOnDebug: true,
        optimizationLevel: 7,
        pngquant: {
            quality: '65-90',
            speed: 4
        },
        svgo: {
            plugins: [
                { removeViewBox: false },
                { removeEmptyAttrs: false }
            ]
        }
    },
    tslint: {
        emitErrors: true,
        failOnWarning: true,
        failOnError: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new ExtractPlugin('bundle.css', {allChunks: true}),
        // Commons chunk doesn't work well with extract
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'main',
        //     children: true,
        //     minChunks: 2
        // }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
