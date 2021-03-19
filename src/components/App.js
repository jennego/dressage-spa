import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Routes from "./routes.js";
import NavBar from "./NavBar.js";
import FooterSection from "./Footer";
import { Grommet } from "grommet";

const App = () => {
  const theme = {
    global: {
      background: "background",
      font: {
        family: "Arial",
        size: "30px",
        height: "20px",
        color: "font",
      },
      colors: {
        background: {
          light: "#fff",
          dark: "#000",
        },
        font: {
          light: "#000",
          dark: "#fff",
        },
        brand: {
          light: "#7c38d6",
          dark: "#9857fa",
        },
        focus: {
          light: "#7c38d6",
          dark: "#9857fa",
        },
      },
    },
  };

  return (
    <Grommet theme={theme} themeMode="dark">
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Routes></Routes>
        </div>
        <FooterSection></FooterSection>
      </Router>
    </Grommet>
  );
};

export default App;
