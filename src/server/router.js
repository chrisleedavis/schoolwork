"use strict";

const bodyParser = require("body-parser");

class Router {

    constructor(express, server) {

        server.use("/", express.static("./dist")); //relative to package.json
        server.use("/src", express.static("./src")); //for development mode & debugging support
        server.use("/node_modules", express.static("./node_modules")); //for development mode & debugging support
        server.use("/sw/*", express.static("./dist/index.html")); //support for html5 routing

        server.use(bodyParser.json({}));
        server.use(bodyParser.urlencoded({extended: false}));

    }
}

module.exports = Router;
