import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import DressageIndexPage from "../pages/Index.js";
import DressageShowPage from "../pages/Show.js";
import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About.js";
import Page404 from "../pages/404.js";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/tests" component={DressageIndexPage} />
        <Route exact path="/about" component={About} />
        <Route path="/tests/:id" component={DressageShowPage} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Routes;
