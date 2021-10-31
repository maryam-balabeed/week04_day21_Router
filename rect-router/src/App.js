import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Contactus from "./component/Contactus";
import Aboutus from "./component/Aboutus";


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/Contactus" component={Contactus} />
      <Route path="/aboutus" component={Aboutus} />
    </div>
  );
}

function Home() {
  return(
    <h1>Home</h1>
  )
}

export default App;
