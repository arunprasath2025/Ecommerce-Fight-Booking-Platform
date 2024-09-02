import { pool } from "../../config/config";

export const createData =  async (
  user_id : string,
  password : string
  
   
) => { 
    
   const result = await pool.query(
      `insert into user_login(username,passwordt
        ) 
                values($1,$2)`,
      [
        user_id,
        password,
      ]);

      return result;

  };

  export const getAllData = async () => {
     
    return  pool.query(
      `select * from user_login;` );

    };

    