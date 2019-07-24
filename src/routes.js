import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login'
import Register from './Components/Register/register'
import AdminDashboard from './Components/Admin/AdminDashboard';
import OperatorDashboard from './Components/Operator/OperatorDashboard';
import Search from './Components/Search/search';
import UserDashboard from './Components/User/UserDashboard';

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/OperatorDashboard" component={OperatorDashboard} />
        <Route path="/search" component={Search} />
        <Route path="/UserDashboard" component={UserDashboard} />
    </Switch>
)