import "./Navbar.css"
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Navbar()
{

    return <div className="nav">
                <h1><Link to="/">Home</Link></h1>
                <h1><Link to="AboutUs">AboutUs</Link></h1>
                <h1><Link to="/CntactUs">CntactUs</Link></h1>
            </div>
}

export default Navbar;