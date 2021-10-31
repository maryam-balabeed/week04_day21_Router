import {  Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import contactus from "./components/contactus";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <About name="Abdullah" />} />
      <Route exact path="/contactus" component={contactus} />
    </div>
  );
}

export default App;
