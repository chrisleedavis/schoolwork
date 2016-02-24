const webpack = require("webpack"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    name = process.argv.indexOf("-production") >= 0 ? "[name].[chunkhash].js" : "[name].js";

module.exports = {
    entry: {
        app: "./src/app/app.js",
        vendors: ["react", "react-dom", "react-router", "lodash", "muicss/react"]
    },
    resolve: {
      extensions: ["", ".json", ".js", ".jsx", ".css", ".scss"]
    },
    eslint: {
        configFile: "./.eslintrc"
    },
    module: {
       preLoaders: [
           { test: /\.js$/, exclude: /(node_modules)/, loader: "eslint-loader" }
       ],
       loaders: [
           { test: /\.js$/, exclude: /(node_modules)/, loader: "babel" },
           { test: /\.scss$/, loader: "style!css!sass" },
           { test: /\.css$/, loader: "style!css" },
           { test: /\.(png|jpg)$/, loader: "url?limit=8192" }, // inline base64 URLs for <=8k images, direct URLs for the rest
           { test: /\.(ico)$/, loader: "static-loader" }
       ]
    },
    output: {
        path: "./dist",
        filename: name
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendors", name),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/public/index.html",
            favicon: "./src/public/favicon.ico"
        })
    ]
};
