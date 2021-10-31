import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/Contactus">Contact Us</Link>
      </div>
    );
  }

  export default Navbar;