import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import CntactUs from './components/CntactUs';

import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/CntactUs" component={CntactUs} />

    </div>
  );
}

export default App;
