import React, { useState, useEffect } from 'react';
import './App.css'
import { Link, Route, useParams, useHistory } from "react-router-dom";
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContantUS from './components/ContantUS';
function App() {
 return <div>
<Navigation />
<Route exact path='/' component={Home}  />
<Route exact path='/AboutUs' component={AboutUs}/>
<Route exact path ='/ContantUS'component={ContantUS}/>

</div>
} 
const history=useHistory;
<Home history={history} />


export default App;
