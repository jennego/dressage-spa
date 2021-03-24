import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap-4-grid/css/grid.css";

import "./App.css";
import Routes from "./routes.js";
import NavBar from "./NavBar.js";
import FooterSection from "./Footer";
import { Grommet } from "grommet";
import { AppContext } from "./AppProvider";

const App = () => {
  const theme = {
    global: {
      background: "background",
      font: {
        family: "Arial",
        size: "25px",
        height: "1em",
        color: "font",
      },
      colors: {
        background: {
          light: "light-4",
          dark: "#000",
        },
        font: {
          light: "#000",
          dark: "#fff",
        },
        text: {
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
        surface: {
          light: "light-1",
          dark: "#0d0d0d",
        },
      },
    },
  };

  const { mode } = useContext(AppContext);

  return (
    <Grommet theme={theme} themeMode={mode}>
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
