import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"
import { Link, Route, useParams, useHistory } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* Route renders a component depending on the current path in the url */}
      <Route exact path="/" component={Home} />
      {/* render takes a function that returns JSX (another component), can be used to pass props*/}
      <Route path="/about" render={() => <About name="John" />} />
      {/* using the keyword exact will result in only rendering the component when the path matches exactly something like /products/1 will not match anymore */}
      <Route exact path="/contactus" component={Contact} />
      {/* to specify a url parameter add a colon before the name of the url parameter */}
 
    </div>
  );
}


export default App;
