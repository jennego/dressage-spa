import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import './App.css';
import DressageIndexPage from './DressageIndexPage.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li> <Link to="/">Index</Link></li>
          <li> <Link to="/about"> About </Link></li>
        </ul>
        <Route exact path='/' component={DressageIndexPage} /> 
      </div>
      </Router>
    );
  }
}

export default App;
