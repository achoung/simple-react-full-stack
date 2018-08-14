const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const outputDirectory = 'build';

module.exports = merge(baseConfig, {
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: '[name].bundle.[chunkhash].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        // Minify JS
        new UglifyJsPlugin({
            sourceMap: false,
            parallel: true,
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
});