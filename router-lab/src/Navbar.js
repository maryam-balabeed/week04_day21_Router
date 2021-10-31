import { Link, Route, useParams, useHistory } from "react-router-dom";

function Navbar(){
    return (
        <div className="links">
           
          <Link to="/">Home</Link>
            
          <Link to="/about">About Us</Link>
            
          <Link to="/products">Contact Us</Link>
        </div>
      );
}

export default Navbar;