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
        family: "Poppins",
        size: "24px",
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
          light: "#6939a8",
          dark: "#7b46c2",
        },
        focus: {
          light: "#7c38d6",
          dark: "#9857fa",
        },
        surface: {
          light: "light-1",
          dark: "dark-1",
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
