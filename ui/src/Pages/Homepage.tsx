
import React, {useState,Component } from "react";
import { useNavigate } from "react-router-dom";


import '../Styles/homepage.css';



function Homepage() {
   
 const [loading,setLoading] = useState(false)
 const navigate = useNavigate();
  
   const formData  = React.useRef<HTMLFormElement>(null);

   const search =  (event : React.SyntheticEvent) =>{
       setLoading(true)
            event.preventDefault();
         
            const newData = {
              Ffrom: formData?.current?.source.value,
              Fto  : formData?.current?.destination.value,
              DateT : formData?.current?.date.value

          }
          console.log(newData)     
          
   const url = `https://flightapibackend.herokuapp.com/flight/search?Ffrom=${newData.Ffrom}&Fto=${newData.Fto}&DateT=${newData.DateT}`;  
   console.log(url)  
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        setLoading(false)
        navigate('/search',{state:data});
      })
     
      
     
   }
  
  return (
      
    
 
 <div className="header">
        <img  src="https://images.all-free-download.com/images/graphiclarge/orange_airplane_icon_vector_280728.jpg"></img>
        <h2>Travel-A-One</h2>
        
        <form className="form" onSubmit={search} ref={formData} >
            <div>
             
            <select name="source" required>
      <option value="" disabled selected hidden>From</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Delhi">Delhi</option>
      <option value="Goa">Goa</option>
     
    </select>
             </div>
             <div>
         
            
             <select name="destination" required>
      <option value="" disabled selected hidden>To</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Delhi">Delhi</option>
      <option value="Goa">Goa</option>
     
    </select>
             </div>

             <div>
         
        
               
             <select name="date" required>
      <option value="" disabled selected hidden>Date</option>
      <option value="15/10/22">15/10/22</option>
    </select>
           </div>
           <div className="buttoncheck">
         {!loading &&  ( <button  type="submit">
                 SEARCH FLIGHTS
            </button> )} </div>  
            <div className="buttoncheck" >
         {loading && (  <button  type="submit" disabled>
           <i  className="fas fa-spinner fa-spin"></i>{" "}   
            SEARCHING FLIGHTS... 
            </button>) } </div>  
        </form>
  
    </div>
 
  )
}


export default Homepage