import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import JobInProgressTabPane from '../../src/components/Body/DashboardTabView/JobInProgressTabPane.jsx';
import Body from '../../src/components/Body/Body.jsx';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Body}/>
                    <Route path="/JobInProgressTabPane" component={JobInProgressTabPane}/>
                </Switch>
            </Router>
        )
    }
}