import {useNavigate,useLocation} from "react-router-dom"
import React, { useState } from "react";

import '../Styles/flightpage.css';


 function Flightspage() {
  
 
const location = useLocation();
const navigate = useNavigate();
 const[name,Setname] = useState('');
  const book = (result : {
    flight_number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; flight_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ffrom: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; fto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; datet: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; total_no_of_tickets: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; fare: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,arrival_time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,departure_time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
}) => {
    const ticket = name as unknown as number;
    const newProduct = {
          flight_number : result.flight_number,
          flight_name :result.flight_name,
          ffrom : result.ffrom,
          fto :  result.fto,
          Datet : result.datet,
          total_no_of_tickets : result.total_no_of_tickets,
          no_of_tickets  : name,
          fare :result.fare as number * ticket,
          arrival_time : result.arrival_time,
          departure_time : result.departure_time,
          duration : result.duration
  }
     
      navigate('/bookingconfirmation',{state:newProduct});
    
      
  }
 console.log(location.state)

  function handleChange(event: { target: { value: React.SetStateAction<string>; }; }){
     Setname(event.target.value)
  }

  
  return (
      
    <div className="body">

      
      
       <p><div className="offer">OFFER </div>Apply your first Coupon and get 15% discount(CODE:TRAVELAONEFIRST)</p>
       <div className="col">
        <div className="col1">Airlines</div> 
        <div className="col2"> Departure </div> 
        <div className="col3">Duration </div> 
        <div className="col4">Arrival </div> 
        <div className="col5">Date </div>
         <div className="col6">Seats left</div>
          <div className="col7"> Price </div>
          <div className="col8"> Tickets</div> 
          <div className="col8"> CLICK </div> 
          </div>
        {
      location.state.map((result: {
       flight_number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; flight_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ffrom: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; fto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; datet: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; total_no_of_tickets: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal ; fare: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,arrival_time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,departure_time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;   
},i: React.Key | null | undefined) => {
  const N : number = name as unknown as number;
          return (
            <div  key={i}> 
           
          <div className="cards">
          
            <div className="card1" >
            {result.flight_number}
            { result.flight_name}
          </div>
          <div className="card3">
            {result.ffrom}
            <div className="time">{result.arrival_time}</div></div>
            <div className="card2">
              {result.duration}
             <div className="arrow">↦</div>
              </div>
            <div className="card4">
            {result.fto}<div className="time">{result.departure_time}</div></div>
            <div className="card5">
            {result.datet}</div>
            <div className="card6">
            {result.total_no_of_tickets}</div>
            <div className="card7">
            Rs{result.fare}</div>
            <div className="card8">
         <div className="textbox">   <input placeholder="Enter Tickets"
           onChange={handleChange} 
        /> </div>
        
          <div className="button">
           {name as unknown as number < result.total_no_of_tickets as unknown as number && N >= 1 &&
            <button onClick={()=>book(result)}>Book</button>
           }
            </div>
            </div>
           </div>
            </div>
          )
           
          }) 
          
     }
       
    </div>
    
  )
  
  
    
    }

export default Flightspage