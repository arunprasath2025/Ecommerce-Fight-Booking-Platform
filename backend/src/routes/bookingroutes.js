"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var bookingservices_1 = require("../services/bookingservices");
exports.router = (0, express_1.Router)();
exports.router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
exports.router.post("/", bookingservices_1.testpasser.newData);
exports.router.get("/", bookingservices_1.testpasser.findAllData);
exports.router.get("/mybookings", bookingservices_1.testpasser.findByID);
exports.router.get("/ticketdetails", bookingservices_1.testpasser.ticketdetails);
