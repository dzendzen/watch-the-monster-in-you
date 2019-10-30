import React, { components } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Main/Home'
import './App.css';
//import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import Modal from './components/Modal/Modal';



function App() {
  return (
    <div className="App">
    
      
      <NavBar />
      <Modal />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      
      <Background />
    </div>
  );
}

export default App;
