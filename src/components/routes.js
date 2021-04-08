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
        <Route exact path="/about" component={About} />
        <Route exact path="/settings" component={Settings} />
        <Route path="/tests/:id" component={DressageShowPage} />
        <Route path="/search/:q" component={Search} />
        <Route path={["/tests", "/"]} component={DressageIndexPage} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Routes;
