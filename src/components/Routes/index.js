import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { history } from '../../history';

//import Dash from '../../pages/Dash';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../NotFound';
import PrivateRoute from '../PriveteRoute/PrivateRoute';


const Routes = () => (

    <BrowserRouter history={history}>
        <Switch>
            <Route component={Login} exact path="/login" />
            <Route component={Register} exact path="/register" />
            <PrivateRoute component={Home} exact path="/" />
            <PrivateRoute component={NotFound} />
        </Switch>
    </BrowserRouter>

)

export default Routes;