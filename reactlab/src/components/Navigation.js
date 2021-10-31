import { Link, Route, useParams, useHistory } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Home from "./Home";

function Navigation() {
    function Nav() {
        return (
          <div>
            <div className="Nav">
                <h1>Lab</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Contactus">Contactus</Link>
                <Link to="/Aboutus">Aboutus</Link>
            </div>
          </div>
        );
      }
    return (
      <div>
      <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contactus" component={Contactus} />
        <Route exact path="/Aboutus" component={Aboutus} />
      </div>
    );
}

export default Navigation;