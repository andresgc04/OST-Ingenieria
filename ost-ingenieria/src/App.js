import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

class App extends Component{
  render(){
    return(
      <Router history={history}>
        <Routes/>
      </Router>
    );
  }
}

export default App;
