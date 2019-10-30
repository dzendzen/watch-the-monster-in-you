import React, {components} from 'react';
import NavBar from './components/NavBar/NavBar';

import './App.css';
//import axios from 'axios';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Background from './components/Background';



function App() {
  return (
    <div className="App">
     
      <Background />
      <NavBar />
      
        </div>
  );
}

export default App;
