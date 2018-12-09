import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import './App.css';
import Routes from './routes.js'
import NavBar from "./NavBar.js";
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes></Routes>
      </div>
      </Router>
    );
  }
}

export default App;
