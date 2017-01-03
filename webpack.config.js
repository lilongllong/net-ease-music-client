const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const glob = require("glob");

module.exports = {
    entry: {
        vendor: [ "jquery" ],
        nem: [ "./src/index.js", "./src/styles/index.less", ...glob.sync("./src/resource/*")]
    },
    output: {
        path: path.resolve("./dist/assets"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: "url-loader!file-loader?limit=8192&name=/icons/[name].[ext]"
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "React": "react"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),

        new ExtractTextPlugin("./[name]/bundle.css")
    ],
};
