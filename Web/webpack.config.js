"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");


module.exports = {
    entry: {
        indexBook: "./react/src/Book/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./Static"),
        filename: "[name].js",
        chunkFilename: '[name].js',
        //publicPath: path.resolve(__dirname, "./Static/")+"/"
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
    //stats: 'errors-warnings',
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
}