require("core-js/es5");

document.body.innerHTML = '<div id="app"></div>'; //required by phantomjs

const context = require.context("./src/app", true, /.js$/);
context.keys().forEach(context);
