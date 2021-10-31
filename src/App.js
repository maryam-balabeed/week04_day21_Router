import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Navigation from "./componants/Navigation";
import Home from "./componants/Home";
import AboutUs from "./componants/AboutUs";
import ContactUs from "./componants/ContactUs";
import {Route} from "react-router-dom";



function App() {
  
  return(
    <div>
      <Navigation/>
  <Route exact path="/" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/ContactUs" component={ContactUs} />
    </div>
  
  );
  
}


export default App;

