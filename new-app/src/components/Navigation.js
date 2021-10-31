import { Link} from "react-router-dom";


function Navigation() {
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contactus">contactus</Link>
    </div>
  );
}


export default  Navigation