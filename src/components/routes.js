import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import DressageIndexPage from './DressageIndexPage.js'
import DressageShowPage from './DressageShowPage.js'
import WelcomePage from './WelcomePage'
import About from './AboutPage.js'

class Routes extends Component {

    render() {
        return(
            <Switch>
            <Route
                    exact path='/'
                    component={WelcomePage}
            />
            <Route
                exact path='/tests'
                component={DressageIndexPage}
            />
            <Route
                exact path='/about'
                component={About}
            />
            <Route
                path="/tests/:id"
                component={DressageShowPage}
            />
            </Switch>
        )
    }

}

export default Routes