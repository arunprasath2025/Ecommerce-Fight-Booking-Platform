import { pool } from "../../config/config";
export const createData =  async (
    user_id : string,
    flight_number : Number,
    flight_name : string,
    no_of_tickets : Number, 
    total_amount : Number,
    paymentid : string,
    ffrom : string,
      fto  :string,
      datet : string,
      arrival_time : string,
      departure_time : string
    
) => { 
    
   const result = await pool.query(
      `insert into booking_details(username,flight_number,flight_name,no_of_tickets,amount,paymentid,ffrom,fto,datet,arrival_time,departure_time) 
                values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        user_id,
        flight_number,
        flight_name,
        no_of_tickets,
        total_amount,
        paymentid,
        ffrom,
      fto,
      datet,
      arrival_time,
      departure_time
      ]);

      return result;

  };


  export const getAllData = async () => {
     
    return  pool.query(
      `select * from booking_details;` );

    };


    export const getbyID = async ( user_id: String) => {
        return pool.query(
            `select * from booking_details where username = $1;`,[user_id] );
      };

      
    
    export const getdetails = async ( paymentid: String) => {
      return pool.query(
          `select a.flight_number,a.flight_name,b.namet,b.seat,b.gender,a.datet,a.bookingid,a.ffrom,a.fto,a.arrival_time,a.departure_time from booking_details a INNER JOIN passenger_details b ON a.paymentid = b.paymentid where b.paymentid = $1 ;`,[paymentid] );
    };