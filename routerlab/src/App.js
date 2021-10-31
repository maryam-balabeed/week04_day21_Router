import logo from './logo.svg';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import './App.css';
import Home from './Home';
import Contactus from './Contactus';
import Navigation from './Navigation';
import Abuot from './Abuot';
import Test from './Test';



function App() {
  return (
   <>
      <Navigation />
       <div className="App">
      <Route exact path="/Home" component={Home} />
      <Route exact  path="/Contactus" component={Contactus} />
      <Route exact  path="/Abuot" component={Abuot} />
      <Route exact  path="/Test/:id" component={Test} />
  
    </div>
    </>
  );
}


export default App;
