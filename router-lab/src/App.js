import logo from './logo.svg';
import './App.css';
import { Link, Route, useParams, useHistory,BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <>
    <Navigation />
      <Route exact path="/home" component={Home} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/contactUs" component={ContactUs} />
    </>
  );
}

function Navigation() {
  return (
    <div className="links">
      
     <ul className="listU">
     {/* <BrowserRouter> */}
        <li className="listl" ><Link to="/home" className="listlA">Home </Link></li>
        <li className="listl" ><Link to="/aboutUs" className="listlA">About Us</Link></li>
        <li className="listl" ><Link to="/contactUs" className="listlA">Contact Us</Link></li>
        {/* </BrowserRouter> */}
      </ul>
      
    </div>
  );
}

export default App;
