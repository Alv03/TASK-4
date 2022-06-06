import React from "react";
import { render } from "react-dom";
import { Link,BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom";
import Home from "./Home";
import About from './About'
import Contacts from "./Contacts";

function App(){
  return(
    <Router>
    <h1>Hello Alvin</h1>
    <h2>Select any Link</h2>
    <ul><li><Link to ="/">Home</Link></li></ul>
    <ul><li><Link to ="/About">Import Models</Link></li></ul>
    <ul><li><Link to ="/contacts">Contacts</Link></li></ul>
        <Routes>    
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        </Routes>    
    </Router>
  );
}


render(<App />, document.getElementById("root"));
