import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login'
import Register from './Components/Register/register'
import AdminDashboard from './Components/Admin/AdminDashboard';
import OperatorDashboard from './Components/Operator/OperatorDashboard';
import Search from './Components/Search/search';
import UserDashboard from './Components/User/UserDashboard';
import ListUsers from './Components/User/ListUsers';
import AvailableFlights from './Components/Flights/AvailableFlights'
import ScheduledFlights from './Components/Flights/ScheduledFlights'
import Payments from './Components/Payments/Payments'
import Airplanes from './Components/Airplanes/Airplanes'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/OperatorDashboard" component={OperatorDashboard} />
        <Route path="/search" component={Search} />
        <Route path="/UserDashboard" component={UserDashboard} />
        <Route path="/ListUsers" component={ListUsers} />
        <Route path="/AvailableFlights" component={AvailableFlights} />
        <Route path="/ScheduledFlights" component={ScheduledFlights} />
        <Route path="/Payments" component={Payments} />
        <Route path="/Airplanes" component={Airplanes} />



    </Switch>
)