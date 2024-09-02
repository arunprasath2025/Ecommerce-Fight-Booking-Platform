"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var userservices_1 = require("../services/userservices");
exports.router = (0, express_1.Router)();
exports.router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
exports.router.post("/", userservices_1.testpasser.newData);
exports.router.get("/", userservices_1.testpasser.findAllData);
