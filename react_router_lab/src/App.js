import { Link, Route, useParams, useHistory } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contactus" component={Contactus} />
    </div>
  );
}

function Navigation() {
  return (
    <div className="links">
      {/* link is used to switch the path, same as anchor tag in html <a></a> */}
      
      <ul className="topnav">
    <li><a className="active"  >TV Shows</a></li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contactus">Contact us</Link></li>
    
  </ul>

    </div>
  );
}

export default App;
