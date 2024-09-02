"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var passengerservices_1 = require("../services/passengerservices");
exports.router = (0, express_1.Router)();
exports.router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
exports.router.post("/", passengerservices_1.testpasser.newData);
