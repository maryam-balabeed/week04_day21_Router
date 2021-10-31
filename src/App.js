import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/Abouus";
import Contact from "./Components/Contact";
import { Link, Route, useParams, useHistory } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        
      </header>
    </div>
  );
}

export default App;
