import React from 'react'
import { Link, Route, useParams, useHistory } from "react-router-dom";

function Navigation() {
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/ContantUs'>contact</Link>

        </div>
    )
}

export default Navigation
