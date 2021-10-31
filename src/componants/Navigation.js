import { Link } from "react-router-dom";
import './compo.css';

function Navigation() {
    return (
      <div className="links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/AboutUs"><p>About Us</p></Link>
        <Link to="/ContactUs"><p>Contact Us</p></Link>
        
      </div>
    );
  }

  export default Navigation;