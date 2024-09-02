import { Response, Request } from 'express';
import { createData} from '../dao/passengerqueries';
const newData = async (req: Request, res: Response) => {
    const {
        user_id,
        name,
        age,
        seat,
        paymentid,
        gender
    } = req.body;
  
  
    const Data = await createData(
      user_id,
     name,
     age,
     seat,
     paymentid,
     gender
    );
    Data.json;
    res.send(Data);
  };




 
  export const testpasser = {
    newData,

 }
 