import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CurpForm from './components/CurpForm';
import Registrado from './components/Registrado';
import Datos from './components/Datos';

ReactDOM.render(
  <Router>
      <div className="container">
          <Header/>
          <br/>
          <Route path="/" exact component={CurpForm}/>
          <Route path="/datos" exact component={Datos}/>
          <Route path="/registrado" exact component={Registrado}/>
          <br/>
          <Footer/>
        </div>
  </Router>,
  document.getElementById("root")
);
