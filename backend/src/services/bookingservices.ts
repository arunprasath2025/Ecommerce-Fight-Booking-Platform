import { Response, Request } from 'express';
import { createData, getAllData, getbyID,getdetails} from '../dao/bookingqueries';
const newData = async (req: Request, res: Response) => {
    const {
      user_id ,
      flight_number ,
      flight_name,
      no_of_tickets,
      total_amount,
      paymentid,
      ffrom,
      fto,
      datet,
      arrival_time,
      departure_time,
     
    } = req.body;
  
  
    const Data = await createData(
      user_id ,
      flight_number ,
      flight_name,
      no_of_tickets,
      total_amount,
      paymentid,
      ffrom,
      fto,
      datet,
      arrival_time,
      departure_time,
      
    );
    Data.json;
    res.header("Access-Control-Allow-Origin", "*");
    res.send(Data);
  };

  const findAllData = async (req: Request, res: Response) => {
    const Datas = await getAllData();
    Datas.json;
    return res.send(Datas.rows);
  };

  const findByID = async (req: Request, res: Response) => {
    const user_id: any = req.query.user_id;

    const Datas : any= await getbyID(user_id);
    Datas.json;
    return res.send(Datas.rows);
  };

  const ticketdetails = async (req: Request, res: Response) => {
    const paymentid: any = req.query.paymentid;

    const Datas : any= await getdetails(paymentid);
    Datas.json;
    return res.send(Datas.rows);
  };
 

  export const testpasser = {
     newData,
     findAllData,
     findByID,
     ticketdetails
  }