import { Response, Request } from 'express';
import { createData,getAllData} from '../dao/userqueries';
const newData = async (req: Request, res: Response) => {
    const {
        user_id,
        password,
    } = req.body;
  
  
    const Data = await createData(
      user_id,
      password
    );
    Data.json;
    res.send(Data);
  };

  const findAllData = async (req: Request, res: Response) => {
    const Datas = await getAllData();
    Datas.json;
    return res.send(Datas.rows);
  };


 
  export const testpasser = {
    newData,
    findAllData
 }
 