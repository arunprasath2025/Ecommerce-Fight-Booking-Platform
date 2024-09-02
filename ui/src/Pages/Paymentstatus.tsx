import React,{useState,useRef} from 'react'
import { useLocation ,useNavigate} from 'react-router-dom';
import axios from "axios";
import '../Styles/paymentstatus.css';
import { useReactToPrint } from 'react-to-print';

function Paymentstatus() {

    const location = useLocation();
    let iv : any = [];
    const [results,setResults] = useState(iv);
    const navigate = useNavigate();
 const handlehome = () => {
  navigate('/')
 }
  const gettickets = () => {
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json'},
    
    };
    const url = `https://flightapibackend.herokuapp.com/booking/ticketdetails?paymentid=${location.state}`;
  
    
    fetch(url,requestOptions)
      .then((response: Response) => response.json())
      .then((data) => {
        setResults([...data]);
      });

      console.log(results) 

    

    
        

    }


    const componentRef : any = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
 })
    
  return (
    <div className='psbody'> 
        <div className='greenbg'>
       <div className='sucesstext'> Transaction Successful *Check Mail for Reciept*</div>
       
        </div>
        <div className='Buttons'>
      <div className='getticketsbutton'>
      <button onClick={gettickets}>
               Ticket Details 
        </button>
      </div>
      <div className='getprint'>
        <button onClick={handlePrint}>
                Print Ticket
        </button>  </div>
        <div className="gethome">
       
        <button onClick={handlehome}>
               Home
        </button></div>
        </div>
        <div ref={componentRef}>
        <table>
  <thead>
    <tr>
      <th>Booking ID</th>
      <th>Flight number</th>
      <th>Flight Name</th>
      <th>Passenger name</th>
      <th>Seat Number</th>
      <th>Date</th>
      <th>Source</th>
      <th>Arrival Time</th>
      <th>Destination</th>
      <th>Departure Time</th>
    </tr>
  </thead>
  <tbody>
           {

                    results.map((result :any,index : number)=>{
                        return(

                            <tr key={index}>
                                 
                                 <td data-column="BOOKING ID :">{result.bookingid}</td>
                                <td data-column="FLIGHT NUMBER :">{result.flight_number}</td>
                                <td data-column="FLIGHT NAME :">{result.flight_name}</td> 
                                <td data-column="NAME :">{result.namet}</td>
                                <td data-column="SEAT NUMBER:">{result.seat}</td>
                                <td data-column="TRAVEL DATE :">{result.datet}</td>
                                <td data-column="SOURCE :">{result.ffrom}</td>
                                <td data-column="ARRIVAL TIME :">{result.arrival_time}</td>
                                <td data-column="DESTINATION :">{result.fto}</td>
                              
                                <td data-column="DEPARTURE TIME :">{result.departure_time}</td>
                            </tr>  
                        )
                    })
                }
                </tbody>
                </table>
                </div>

               
  
   
  


    </div>
    

  )
  }

export default Paymentstatus