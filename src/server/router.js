"use strict";

const bodyParser = require("body-parser");

class Router {

    constructor(express, server) {

        server.use("/", express.static("./dist")); //relative to package.json
        server.use("/sw/", express.static("./dist")); //support for html5 routing
        server.use("/sw/*", express.static("./dist/index.html")); //support for html5 routing

        server.use(bodyParser.json({}));
        server.use(bodyParser.urlencoded({extended: false}));

    }
}

module.exports = Router;
