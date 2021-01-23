import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Nav from "../Navbar/Nav";
import styles from "./App.module.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return(
    <div>
      <Nav/>
      <h1 className={styles.AppHeader}>This is the latest heading</h1>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
