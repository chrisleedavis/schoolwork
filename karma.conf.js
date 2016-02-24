"use strict";

module.exports = (config) => {
    config.set({
        browsers: ["PhantomJS"],
        files: [
            { pattern: "webpack.config.tests.js", watched: false }
        ],
        frameworks: ["jasmine"],
        preprocessors: {
            "webpack.config.tests.js": ["webpack"]
        },
        coverageReporter: {
            type: "lcovonly"
        },
        reporters: ["dots", "coverage"],
        singleRun: true,
        webpack: {
            resolve: {
                extensions: ["", ".js", ".scss"]
            },
            module: {
                loaders: [
                    { test: /\.js$/, loader: "babel" },
                    { test: /\.scss$/, loader: "style!css!sass" }
                ],
                postLoaders: [
                    { test: /\.js$/, exclude: /(node_modules|resources\/js\/vendor)/, loader: "istanbul-instrumenter" }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });

    config.LOG_DEBUG = true;
};
