import { Link } from "react-router-dom";
function Nav() {
    return (
      <div className="links">
        {/* link is used to switch the path, same as anchor tag in html <a></a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contact</Link>
      </div>
    );
  }
  
export default Nav;
  