import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Login from '../Views/Login'
import Tasks from '../Views/Tasks'
import PrivateRoute from '../Components/PrivateRoute'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/tasks">
                    <Tasks />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default Routes