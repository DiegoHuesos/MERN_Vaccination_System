import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import "./App.css";


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CurpForm from './components/CurpForm';

function App() {
  return (
    <Router>
      <div className="container">
          <Header/>
          <br/>
          <CurpForm/>
          <br/>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
