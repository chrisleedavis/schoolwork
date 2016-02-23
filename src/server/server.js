"use strict";

const express = require("express"),
    globals = require("../../build/_globals"),
    Router = require("./router"),
    config = require("./config/config"),
    mongoose = require("mongoose"),
    server = express();

new Router(express, server);
mongoose.Promise = Promise;

const liveReload = require("connect-livereload");
server.use(liveReload());
console.log("development mode, using liveReload");
server.listen(8989);
console.log("School Work server is now up...http://localhost:8989");