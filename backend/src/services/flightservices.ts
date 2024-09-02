import { Response, Request } from 'express';
import { createData, getAllData, getbySearch,ticketUpdate} from '../dao/fligtqueries';
const newData = async (req: Request, res: Response) => {
    const {
        flight_number,
        flight_name,
        Ffrom,
        Fto,
        DateT,
        Total_no_of_tickets,
        Fare,
        arrival_time,
        departure_time,
        duration
    } = req.body;
  
  
    const Data = await createData(
        flight_number,
        flight_name,
        Ffrom,
        Fto,
        DateT,
        Total_no_of_tickets,
        Fare,
        arrival_time,
        departure_time,
        duration
    );
    Data.json;
    res.send(Data);
  };

  const findAllData = async (req: Request, res: Response) => {
    const Datas = await getAllData();
    Datas.json;
    return res.send(Datas.rows);
  };

  const search = async (req: Request, res: Response) => {
    const Ffrom: any = req.query.Ffrom;
    const Fto: any = req.query.Fto;
    const DateT: any = req.query.DateT;
    const Datas : any= await getbySearch(Ffrom,Fto,DateT);
    Datas.json;
    return res.send(Datas.rows);
  };
 
  const updatetickets = async (req: Request, res: Response) => {
    const Total_no_of_tickets: any = req.query.Total_no_of_tickets;
    const flight_number: any = req.query.flight_number;
    const Datas : any= await ticketUpdate(Total_no_of_tickets,flight_number);
    Datas.json;
    return res.send(Datas.rows);
  };
 

  export const testpasser = {
     newData,
     findAllData,
     search,
     updatetickets
  }