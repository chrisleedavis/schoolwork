//ensure all files are covered, regardless if spec/test has been defined already
//  https://github.com/deepsweet/istanbul-instrumenter-loader
//  http://www.codefornow.com/2015/05/25/webpack-karma-and-code-coverage-2/
require("core-js/es5");

const testContext = require.context("./src/app", true, /.spec\.js$/);
testContext.keys().forEach(testContext);

const componentsContext = require.context("./src/app/components", true, /(?!(spec.js)$)/);
componentsContext.keys().forEach(componentsContext);
