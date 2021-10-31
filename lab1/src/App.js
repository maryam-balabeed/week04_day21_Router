import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About_us from './Components/About_us';
import Home from './Components/Home';
import Contact_us from './Components/Contact_us';
import Contact_us2 from './Components/Contact_us2';
import { BrowserRouter, Route,Switch } from 'react-router-dom';



function App() {



 
  return (
    
    <div>
      <Navbar />
      
    <div className="d0">

    <Switch>

    <Route exact path='/' component={Home} />
    <Route  path='/About' component={About_us} />
    <Route  path='/Contact' component={Contact_us} />
    <Route  path='/Contact2' component={Contact_us2} />
  
    </Switch>

      </div>
  
      <Footer />
    </div>


  );
}


export default App;
