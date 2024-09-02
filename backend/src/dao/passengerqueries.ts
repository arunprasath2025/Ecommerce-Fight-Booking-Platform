import { pool } from "../../config/config";

export const createData =  async (
  user_id : string,
  name : string,
  age : Number,
  seat : string,
   paymentid : string,
   gender : string
) => { 
    
   const result = await pool.query(
      `insert into passenger_details(username,namet,age,seat,paymentid,gender
        ) values($1,$2,$3,$4,$5,$6);`,
      [
        user_id,name,age,seat,paymentid,gender
      ]);

      return result;

  };


    