import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Main/Home'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Background from './components/Background';
import Modal from './components/Modal/Modal';
import Result from './components/result'




function App() {
  return (
    <div className="App">
    
      
      <NavBar />
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Modal}/>
        <Route path="/result" component={Result}/>
      </Switch>

      
      <Background />
    </div>
  );
}

export default App;
