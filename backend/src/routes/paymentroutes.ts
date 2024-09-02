import { Router } from "express";

import { testpasser } from "../services/paymentservices";
export const router: Router = Router();

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.post("/orders", testpasser.orderpayment);
router.post("/verify", testpasser.verifypayment);
