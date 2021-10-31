import {Link,Route} from "react-router-dom"
import Home from './Home'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import "./Component.css"

function NavBar(){
    return (
        <>
    <Nevigation/>
    <Route exact path="/Home" component={Home}/>
    <Route  path="/Aboutus" component={Aboutus} /> 
    <Route  path="/Contactus" component={Contactus} /> 
    </>
    )

    }
    export default NavBar;

    function Nevigation (){
        return (
            <>
            <header className="header"> 
                <h1>Router Web site</h1>
            </header>
          <div className="navbar">
      <Link className="link" to="/Home">Home</Link>
      <Link className="link" to="/Contactus">Conact us</Link>
      <Link className="link" to="/Aboutus">About</Link>
     
          </div>
         </>
        )
      }
      