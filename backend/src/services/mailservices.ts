import { Response, Request } from 'express';
const nodemailer = require("nodemailer");

const sendingmail = async (req: Request, res: Response) => {
    const {
        gmail,
        flight_number,
        flight_name,
        ffrom ,
        fto ,
        Datet,
        no_of_tickets,
        fare
        
    } = req.body;
   const MAIL_USER ='travelasone11@gmail.com'
const MAIL_PASS ='kemngzkyqsocdimb'
const MAIL_FROM ='travelasone11@gmail.com'
   

    const transport = nodemailer.createTransport({
		service: 'gmail',
                port:465,
                secure: true, 
                logger: true,
                debug: true,
                secureConnection: false,
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS
		},tls:{
            rejectUnAuthorized:true
        }
	})
    await transport.sendMail({
		from: MAIL_FROM,
		to: gmail,
		subject: "FLIGHTS TICKETS ",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 10px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>TICKET RECIEPT!</h2>
        <p>FLIGHT NUMBER : ${flight_number}</p> 
        <p>FLIGHT NAME : ${flight_name}</p>
        <p>SOURCE : ${ffrom}</p>  <p>DESTINATION : ${fto}</p>
        <p>DATE : ${Datet}</p> 
        <p>BOOKED TICKETS : ${no_of_tickets}</p>
        <p>FARE : ${fare}</p>
        
         </div>
    `
              
	})
    res.header("Access-Control-Allow-Origin", "*");
    return res.send("Mail Successfully sended");
  };

  export const testpasser = {
 sendingmail
 }


