import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import NavbarComp from './component/Fungsional/NavbarComp';
import HomePage from './component/Fungsional/HomePage';
import About from './component/Fungsional/AboutComp';
import DetailComp from './component/Fungsional/DetailComp';
//import logo from './logo.svg';
//import './App.css';
//import Home from './component/Fungsional/Home';
//import Parent from './component/Class/Parent';
//import BootsrapComp from './component/Class/BootstrapComp';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={About} />
        <Route exact path="/detail/:id" component={DetailComp}/>
      </Switch>

    </BrowserRouter>
);
}

export default App;
