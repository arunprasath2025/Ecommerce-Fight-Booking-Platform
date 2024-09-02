"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.testpasser = void 0;
var fligtqueries_1 = require("../dao/fligtqueries");
var newData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, flight_number, flight_name, Ffrom, Fto, DateT, Total_no_of_tickets, Fare, arrival_time, departure_time, duration, Data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, flight_number = _a.flight_number, flight_name = _a.flight_name, Ffrom = _a.Ffrom, Fto = _a.Fto, DateT = _a.DateT, Total_no_of_tickets = _a.Total_no_of_tickets, Fare = _a.Fare, arrival_time = _a.arrival_time, departure_time = _a.departure_time, duration = _a.duration;
                return [4 /*yield*/, (0, fligtqueries_1.createData)(flight_number, flight_name, Ffrom, Fto, DateT, Total_no_of_tickets, Fare, arrival_time, departure_time, duration)];
            case 1:
                Data = _b.sent();
                Data.json;
                res.send(Data);
                return [2 /*return*/];
        }
    });
}); };
var findAllData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, fligtqueries_1.getAllData)()];
            case 1:
                Datas = _a.sent();
                Datas.json;
                return [2 /*return*/, res.send(Datas.rows)];
        }
    });
}); };
var search = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Ffrom, Fto, DateT, Datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Ffrom = req.query.Ffrom;
                Fto = req.query.Fto;
                DateT = req.query.DateT;
                return [4 /*yield*/, (0, fligtqueries_1.getbySearch)(Ffrom, Fto, DateT)];
            case 1:
                Datas = _a.sent();
                Datas.json;
                return [2 /*return*/, res.send(Datas.rows)];
        }
    });
}); };
var updatetickets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Total_no_of_tickets, flight_number, Datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Total_no_of_tickets = req.query.Total_no_of_tickets;
                flight_number = req.query.flight_number;
                return [4 /*yield*/, (0, fligtqueries_1.ticketUpdate)(Total_no_of_tickets, flight_number)];
            case 1:
                Datas = _a.sent();
                Datas.json;
                return [2 /*return*/, res.send(Datas.rows)];
        }
    });
}); };
exports.testpasser = {
    newData: newData,
    findAllData: findAllData,
    search: search,
    updatetickets: updatetickets
};
