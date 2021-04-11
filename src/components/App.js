import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap-4-grid/css/grid.css";

import "./App.css";
import Routes from "./routes.js";
import NavBar from "./Layout/NavBar.js";
import FooterSection from "./Layout/Footer";
import { Grommet } from "grommet";
import { AppContext } from "../contexts/ThemeToggleProvider";

import SlideMenu from "./Layout/SideMenu";
import { theme } from "./theme/theme";

const App = () => {
  const { mode } = useContext(AppContext);

  return (
    <Grommet theme={theme} themeMode={mode}>
      <Router>
        <div className="App">
          <SlideMenu />
          <NavBar></NavBar>
          <Routes></Routes>
        </div>
        <FooterSection></FooterSection>
      </Router>
    </Grommet>
  );
};

export default App;
