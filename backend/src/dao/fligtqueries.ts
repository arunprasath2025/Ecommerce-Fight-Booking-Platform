import { pool } from "../../config/config";

export const createData =  async (
    flight_number : Number,
    flight_name : string,
    Ffrom : string,
    Fto : string,
    DateT : string,
    Total_no_of_tickets : Number,
    Fare : Number,
    arrival_time : string,
    departure_time : string,
    duration : string
) => { 
    
   const result = await pool.query(
      `insert into flights(flight_number,flight_name,Ffrom,Fto,DateT,Total_no_of_tickets,Fare,arrival_time,departure_time,duration) 
                values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
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
      ]);

      return result;

  };


  export const getAllData = async () => {
     
    return  pool.query(
      `select * from flights;` );

    };


    export const getbySearch = async ( Ffrom: String , Fto : string, DateT :string) => {
        return pool.query(
            `select * from flights where Ffrom = $1 and Fto = $2 and  datet = $3;`,[Ffrom,Fto,DateT] );
      };
    

      export const ticketUpdate = async ( Total_no_of_tickets : number, flight_number : number) => {
        return pool.query(
            `UPDATE flights SET total_no_of_tickets = $1 where flight_number=$2`,[Total_no_of_tickets,flight_number] );
      };
    
    
    