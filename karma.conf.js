"use strict";

const coverageInformation = {
        true: {
            coverageReporter: { type: "text" },
            reporters: ["dots", "coverage"],
            singleRun: false,
            autoWatch: true
        },
        false: {
            coverageReporter: { type: "lcovonly" },
            reporters: ["dots", "coverage", "coveralls"],
            singleRun: true,
            autoWatch: false
        }
    },
    isDevelopment = process.argv.indexOf("-d") >= 0,
    configuration = coverageInformation[isDevelopment];

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
        coverageReporter: configuration.coverageReporter,
        reporters: configuration.reporters,
        singleRun: configuration.singleRun,
        autoWatch: configuration.autoWatch,
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
