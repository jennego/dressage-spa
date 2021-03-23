import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
        size: "30px",
        height: "30px",
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
