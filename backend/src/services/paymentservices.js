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
var Razorpay = require("razorpay");
var crypto = require("crypto");
var orderpayment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var instance, options;
    return __generator(this, function (_a) {
        try {
            instance = new Razorpay({
                key_id: "rzp_test_IpqbHkMUIdMcD2",
                key_secret: "FGCr9OoylvNO8AgcK340TkCP"
            });
            options = {
                amount: req.body.amount * 100,
                currency: "INR",
                receipt: crypto.randomBytes(10).toString("hex")
            };
            instance.orders.create(options, function (error, order) {
                if (error) {
                    console.log(error);
                    res.send("Something Went Wrong!");
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.status(200).json({ data: order });
            });
        }
        catch (error) {
            res.send("Internal Server Error!");
            console.log(error);
        }
        return [2 /*return*/];
    });
}); };
var verifypayment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var KEY_SECRET, _a, razorpay_order_id, razorpay_payment_id, razorpay_signature, sign, expectedSign;
    return __generator(this, function (_b) {
        KEY_SECRET = "FGCr9OoylvNO8AgcK340TkCP";
        try {
            _a = req.body, razorpay_order_id = _a.razorpay_order_id, razorpay_payment_id = _a.razorpay_payment_id, razorpay_signature = _a.razorpay_signature;
            sign = razorpay_order_id + "|" + razorpay_payment_id;
            expectedSign = crypto
                .createHmac("sha256", KEY_SECRET)
                .update(sign.toString())
                .digest("hex");
            if (razorpay_signature === expectedSign) {
                res.header("Access-Control-Allow-Origin", "*");
                res.send("Payment verified successfully");
            }
            else {
                res.send("Invalid signature sent!");
            }
        }
        catch (error) {
            res.send("Internal Server Error!");
            console.log(error);
        }
        return [2 /*return*/];
    });
}); };
exports.testpasser = {
    verifypayment: verifypayment,
    orderpayment: orderpayment
};
