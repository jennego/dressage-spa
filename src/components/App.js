import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Routes from "./routes.js";
import NavBar from "./NavBar.js";
import "semantic-ui-css/semantic.min.css";
import { Grommet } from "grommet";

class App extends Component {
  render() {
    const theme = {
      global: {
        font: {
          family: "Roboto",
          size: "25px",
          height: "20px",
        },
      },
    };

    return (
      <Grommet theme={theme}>
        <Router>
          <div className="App">
            <NavBar></NavBar>
            <Routes></Routes>
          </div>
        </Router>
      </Grommet>
    );
  }
}

export default App;
