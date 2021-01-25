import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Nav from "../Navbar/Nav";
import styles from "./App.module.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


const App = () => {
  return(
    <Router>
      <div>
        <Nav/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
