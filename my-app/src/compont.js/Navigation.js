import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div className="Navigation">
     <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contactus">Contactus</Link> 
     
        </div>
    )
}
export default Navigation;