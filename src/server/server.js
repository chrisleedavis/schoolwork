"use strict";

const express = require("express"),
    Router = require("./router"),
    config = require("./config/config"),
    mongoose = require("mongoose"),
    server = express();

new Router(express, server);
mongoose.Promise = Promise;

server.listen(8080);
console.log("Schoolwork server is now up...http://localhost:8080");