import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import "./App.css";


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CurpForm from './components/CurpForm';
import Registrado from './components/Registrado';
import Datos from './components/Datos';

function App() {
  return (
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
    </Router>
  );
}

export default App;
