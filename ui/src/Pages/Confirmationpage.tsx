import React,{useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import '../Styles/confirmationpage.css';
import randomize from 'randomatic'

declare global {
  interface Window {
      Razorpay: any;
  }
}


export default function Confirmationpage() {

 

    const location = useLocation();
    const navigate = useNavigate();
   const iv : any = " ";
    const [book,setBook] = useState(location.state.no_of_tickets);
    const [payment,setPayment] = useState(iv);
    const [travellernames,setTravellername] = useState([
      { name: "", age: 0 , gender : ""},
    ]);
    const [email,setEmail] = useState("");
    

    
    const handleAddPlayers = () => {
      const values = [...travellernames];
      values.push({
        name: "",
         age: 0,
        gender : ""
      });
      setTravellername(values);
      setBook(book-1);
    };
    
   
    const handleRemoveTravellers = (index: number) => {
      const values = [...travellernames];
      values.splice(index, 1);
      setTravellername(values);
      setBook(book+1)
    };

    const handleInputChange = (index : number , event: React.ChangeEvent<HTMLInputElement>) => {
      const values : any = [...travellernames];
      const updatedValue : any = event.target.name;
      values[index ][updatedValue] = event.target.value;
  
      setTravellername(values);
    };
    
    function handleChange(event: { target: { value: React.SetStateAction<string>; }; }){
      setEmail(event.target.value)
   }
   
   const initPayment = (data : any) => {
		const options = {
			key: "rzp_test_IpqbHkMUIdMcD2",
			amount: data.amount,
			currency: data.currency,
			name: location.state.flight_number + " " + location.state.flight_name,
			
     
			order_id: data.id,
      
			handler: async (response : any) => {
				try {
					const verifyUrl = "https://flightapibackend.herokuapp.com/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
          const set = randomize(email + location.state.flight_name + location.state.Datet ,7)
         
          const newProduct = {
            "user_id" : "123@gmail.cm",
            "flight_number":location.state.flight_number,
        "flight_name":location.state.flight_name,
        "ffrom": location.state.ffrom,
        "fto": location.state.fto,
        "datet": location.state.Datet,
        "no_of_tickets": location.state.no_of_tickets,
        "total_amount": location.state.fare,
        "paymentid": set,
        "arrival_time" : location.state.arrival_time,
        "departure_time" : location.state.departure_time

        }
        const bookingurl = `https://flightapibackend.herokuapp.com/booking/`
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
      };
      fetch(bookingurl, requestOptions)
          .then(response => response.json())
         
       const update_tickettotal = location.state.total_no_of_tickets  - location.state.no_of_tickets;
       const updateurl = `https://flightapibackend.herokuapp.com/flight/updateticket?Total_no_of_tickets=${update_tickettotal}&flight_number=${location.state.flight_number}`; 
      
 
       fetch(updateurl,{method : 'PATCH'}).then((response: Response) => response.json())
       
      

       const emailurl = `https://flightapibackend.herokuapp.com/sendmail/`
      
       const passurl = `https://flightapibackend.herokuapp.com/passenger/`
       
       travellernames.map((traveller,i) => {
        return(
           axios.post(passurl,{
            user_id : "123@gmail.cm",
        name : traveller.name,
        age : traveller.age,
        gender : traveller.gender,
        seat : randomize("xrjlnknknlr"+traveller.name+traveller.gender,5),
        paymentid : set
           })
        )
       })
       
       axios.post(emailurl, {  
        "flight_number":location.state.flight_number,
        "flight_name":location.state.flight_name,
        "gmail" : email,
        "ffrom": location.state.ffrom,
        "fto": location.state.fto,
        "Datet": location.state.Datet,
        "no_of_tickets": location.state.no_of_tickets,
        "fare": location.state.fare
    })
          navigate('/payment',{state : set });
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
  
    
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};


   const handlePayment = async () => {
		try {

    	const url = "https://flightapibackend.herokuapp.com/payment/orders";
     
    
   
     
  const { data } = await axios.post(url,{ amount: location.state.fare });
			console.log(data);
			initPayment(data.data);

} catch (error) {
  console.log(error);
}
	};
  


 console.log(travellernames)
  return (
    <div className="container">
   <header>
    
   <h1>Boarding Details</h1>
    <div>
     <h5>Flight Number</h5><h6>{location.state.flight_number}</h6></div>
     <div>
     <h5>Flight Name</h5><h6>{location.state.flight_name}</h6>
     </div>
     </header>
     <section className="flight--general">
      <div>     
        <h5> FROM </h5><h2>{location.state.ffrom}</h2></div>
        <div className="logo">
          <h4>✈</h4>
        </div>
        <div>
       <h5> TO </h5><h2>{location.state.fto}</h2></div>
    
        </section>
        <section className="flight--TimeInfo">
                <h5> DATE </h5><h6>  {location.state.Datet} </h6>
        <h5>ARRIVAL TIME </h5><h6>{location.state.arrival_time} </h6>
        <h5> DEPARTURE TIME </h5><h6> {location.state.departure_time}</h6>
        </section>
        <section className="flight--PassInfo">
        <div>
       <h5>DURATION </h5><h6>{location.state.duration} </h6>
       </div>
       <div>
       <h5>Seats</h5><h6>{location.state.no_of_tickets}</h6>
      </div>
      <div>
       <h5>Fare</h5><h6>
          {location.state.fare}</h6>
          </div>
          
          
          </section>
          <section>
          <div>         <Form className="contact">
            Enter your Email : <input
               type="text"
               name="email"
               placeholder="Enter email"
               onChange={handleChange} >
             </input>
          </Form>
          </div>
          </section>
        
         
  
          <div id ="wrapper">
          <div className="scroll" id="style">
          <div className="force-overflow">
        
          <Row className="justify-content-center">
          
        <Col xs="6" className="dynamic-form-headings">
       
          <h3>Traveller Details</h3>
          <div className="add">
         {book > 1 &&
          <Button  variant="primary" onClick={() => handleAddPlayers()}>
            Add Traveller 
          </Button>  
            
}
</div>
        </Col>
        <Col xs="12">
          <Form>
            <Row className="justify-content-center">
              {travellernames.length > 0 &&   (
                <>
                  {travellernames.map((field, index) => (
                    <Col xs="4">
                      <div className="add-player-div">
                        <h4>Traveller {index + 1}</h4>
                        <Form.Group className="mb-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={field.name}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                          <input
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            value={field.age}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <input
                            type="text"
                            name="gender"
                            placeholder="Enter your gender"
                            value={field.gender}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                          />
                        </Form.Group>
                       <div className="cancel">
                        <Button
                          variant="secondary"
                          onClick={() => handleRemoveTravellers(index)}
                        >
                          Cancel
                        </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </>
              )}
           
            </Row>
           
          </Form>
        </Col>
        
      </Row>
          <div>
           { book == 1 && 
          <Button
                         variant="secondary"
                          onClick={handlePayment}
                        >
                          PAY 
                        </Button>
}
            </div>  
            
            </div>

           
        </div>
       
        </div>

        </div>

  )
 
}
