import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login'
import Register from './Components/Register/register'
import Admin from './Components/Admin/admin';
import Operator from './Components/Operator/operator';
import Search from './Components/Search/search';
import User from './Components/User/user';

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/operator" component={Operator} />
        <Route path="/search" component={Search} />
        <Route path="/user" component={User} />
    </Switch>
)