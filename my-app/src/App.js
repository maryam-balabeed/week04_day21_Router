import { Route} from "react-router-dom";
import Navigation from './compont.js/Navigation'
import Home from "./compont.js/Home";
import About from './compont.js/About'
import Contactus from "./compont.js/contactus"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Route exact path="/" component={Home} />
     <Route path="/About" component={About} />
     <Route path="/Contactus" component={Contactus} />

    </div>
  );
}

export default App;
