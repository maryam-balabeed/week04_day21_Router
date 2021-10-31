import { Link } from "react-router-dom";
function Navigation() {
    return (
        <nav className="my-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contactUs">ContactUs</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;