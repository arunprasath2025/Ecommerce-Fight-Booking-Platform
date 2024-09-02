
import Homepage from './Pages/Homepage';
import Flightspage  from './Pages/Flightspage';
import Confirmationpage from './Pages/Confirmationpage';
import Paymentstatus from './Pages/Paymentstatus';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import './App.css';
    


function App() {
  return (

    <div className="App">
      <Router>
      <Routes>
        

       <Route path='/' element={ <Homepage/>} />
       <Route path='/search' element={<Flightspage/>} />
       <Route path='/bookingconfirmation' element={<Confirmationpage/>} />
       <Route path='/payment' element={<Paymentstatus/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
