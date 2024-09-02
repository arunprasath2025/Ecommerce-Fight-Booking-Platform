import { Response, Request } from 'express';
const Razorpay =  require("razorpay");
const crypto = require("crypto");

const orderpayment = async (req : Request , res : Response) => {
    try {
		const instance = new Razorpay({
			key_id: "rzp_test_IpqbHkMUIdMcD2",
			key_secret: "FGCr9OoylvNO8AgcK340TkCP",
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error: any, order: any) => {
			if (error) {
				console.log(error);
				res.send("Something Went Wrong!" );
			}
            res.header("Access-Control-Allow-Origin", "*");
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.send("Internal Server Error!");
		console.log(error);
	}
}
const verifypayment = async (req: Request, res: Response) => {

      const KEY_SECRET = "FGCr9OoylvNO8AgcK340TkCP"
    try {
		const { razorpay_order_id,
             razorpay_payment_id, 
             razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
            res.header("Access-Control-Allow-Origin", "*");
			res.send("Payment verified successfully");
		} else {
			res.send("Invalid signature sent!");
		}
	} catch (error) {
		res.send("Internal Server Error!" );
		console.log(error);
	}
}

export const testpasser = {
         verifypayment,
         orderpayment
}