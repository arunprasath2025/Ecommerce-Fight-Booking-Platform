"use strict";
exports.__esModule = true;
require('dotenv').config({ path: '.environment/.dev.env' });
var express = require("express");
var http = require("http");
var flightroutes_1 = require("./src/routes/flightroutes");
var userroutes_1 = require("./src/routes/userroutes");
var passengerroutes_1 = require("./src/routes/passengerroutes");
var bookingroutes_1 = require("./src/routes/bookingroutes");
var mailroute_1 = require("./src/routes/mailroute");
var paymentroutes_1 = require("./src/routes/paymentroutes");
var cors = require("cors");
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '100mb' }));
app.use('/flight', flightroutes_1.router);
app.use('/user', userroutes_1.router);
app.use('/passenger', passengerroutes_1.router);
app.use('/booking', bookingroutes_1.router);
app.use('/sendmail', mailroute_1.router);
app.use('/payment', paymentroutes_1.router);
var port = process.env.PORT || 80;
http
    .createServer(app)
    .listen(port, function () {
    return console.log("Server is running on port ".concat(port));
});
