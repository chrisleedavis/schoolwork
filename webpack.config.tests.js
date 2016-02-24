//ensure all files are covered, regardless if spec/test has been defined already
//  https://github.com/deepsweet/istanbul-instrumenter-loader
//  http://www.codefornow.com/2015/05/25/webpack-karma-and-code-coverage-2/
require("core-js/es5");

const context = require.context("./src/app/components", true, /.js$/);
context.keys().forEach(context);
