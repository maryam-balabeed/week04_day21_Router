import './App.css';
import { Link } from 'react-router-dom';
import Home from "./components/Home";
import {Route} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Route  path="/Home" component={Home}/> 
     <Route  path="/Aboutus" component={Aboutus}/> 
     <Route  path="/Contactus" component={Contactus}/> 
    </div>
  );
}
function NavBar(){
  return(
    <div className="links">
<Link to="/Home">Home</Link>
<Link to="/Aboutus">Aboutus</Link>
<Link to="/Contactus">Contactus</Link>
    </div>
  )
}
export default App;
