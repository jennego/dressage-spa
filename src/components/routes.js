import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import DressageIndexPage from "../pages/Index.js";
import DressageShowPage from "../pages/Show.js";
import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About.js";
import Page404 from "../pages/404.js";
import Settings from "../pages/Settings.js";
import Search from "./search.js";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route path="/tests/:id">
          <DressageShowPage />
        </Route>
        <Route path="/search/:query">
          <Search />
        </Route>
        <Route path={["/tests", "/"]}>
          <DressageIndexPage />
        </Route>
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Routes;
