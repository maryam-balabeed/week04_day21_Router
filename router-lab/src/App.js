
import './App.css';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs}/>
      <Route exact path="/products" component={ContactUs} />
    </div>
  );
}

export default App;
