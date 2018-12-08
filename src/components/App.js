import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import './App.css';
import Routes from './routes.js'
import DressageIndexPage from './DressageIndexPage.js'
import DressageShowPage from './DressageShowPage.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul className="menu">
          <li> <Link to="/">Index</Link></li>
          <li> <Link to="/about"> About </Link></li>
        </ul>
        <Routes></Routes>
      </div>
      </Router>
    );
  }
}

export default App;
