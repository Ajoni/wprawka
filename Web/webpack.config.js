"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        indexBook: "./react/src/Book/index.js"
        , indexBorrow: "./react/src/Borrow/index.js"
        , indexReports: "./react/src/Reports/index.jsx"
    },
    output: {
        path: path.resolve(__dirname, "./Static"),
        filename: "[name].js",
        chunkFilename: '[name].js',
        publicPath: "../Static/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin(), new CleanWebpackPlugin()]
}