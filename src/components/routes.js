import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import loadable from "@loadable/component";
import Login from "../pages/login";
import Profile from "../pages/profile";
import ProtectedRoute from "../auth/protected-route";
import FavProvider from "../contexts/favouritesProvider";
import FavouritedTests from "../pages/Fav";
const DressageIndexPage = loadable(() => import("../pages/Index"));
const DressageShowPage = loadable(() => import("../pages/Show"));
const About = loadable(() => import("../pages/About"));
const Page404 = loadable(() => import("../pages/404.js"));
const Settings = loadable(() => import("../pages/Settings.js"));
const Roadmap = loadable(() => import("../pages/Roadmap.js"));
const Admin = loadable(() => import("../components/Admin/index"));
// import DressageIndexPage from "../pages/Index.js";
// import DressageShowPage from "../pages/Show.js";
// import About from "../pages/About.js";
// import Page404 from "../pages/404.js";
// import Settings from "../pages/Settings.js";
// import Search from "./Search/search.js";
// import Roadmap from "../pages/Roadmap.js";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/favourited-tests" component={FavouritedTests} />

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/roadmap">
          <Roadmap />
        </Route>

        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route path="/tests/:id">
          <DressageShowPage />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>
        {/* <Route path="/search/:query">
          <Search />
        </Route> */}
        <Route path={["/tests", "/"]}>
          <DressageIndexPage />
        </Route>
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Routes;
