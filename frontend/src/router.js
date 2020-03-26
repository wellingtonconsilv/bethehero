import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login';
import Register from './pages/register';
import ListIncidents from './pages/list-incidents';
import NewIncident from './pages/newIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/incidents" exact component={ListIncidents}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}

