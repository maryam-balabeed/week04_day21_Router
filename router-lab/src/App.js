import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <Navigation/>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <AboutUs/>} />
      <Route path="/contactUs" component={ContactUs} />
    </div>
    </>
  );
}

export default App;
