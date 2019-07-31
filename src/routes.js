import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login'
import Register from './Components/Register/register'
import AdminDashboard from './Components/Admin/AdminDashboard';
import OperatorDashboard from './Components/Operator/OperatorDashboard';
import Search from './Components/Search/search';
import UserDashboard from './Components/User/UserDashboard';
import AvailableFlights from './Components/Flights/AvailableFlights'
import AvailableFlightsByOperator from './Components/Flights/AvailableFlightsByOperator'
import CurrFlightsUser from './Components/Flights/CurrFlightsUser'
import PastFlightsUser from './Components/Flights/PastFlightsUser'
import ScheduledFlights from './Components/Flights/ScheduledFlights'
import Payments from './Components/Payments/Payments'
import Airplanes from './Components/Airplanes/Airplanes'
import AirplanesByOperator from './Components/Airplanes/AirplanesByOperator'
import Users from './Components/User/Users'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/OperatorDashboard" component={OperatorDashboard} />
        <Route path="/search" component={Search} />
        <Route path="/UserDashboard" component={UserDashboard} />
        <Route path="/AvailableFlights" component={AvailableFlights} />
        <Route path="/ScheduledFlights" component={ScheduledFlights} />
        <Route path="/AvailableFlightsByOperator" component={AvailableFlightsByOperator} />
        <Route path="/CurrFlightsUser" component={CurrFlightsUser} />
        <Route path="/PastFlightsUser" component={PastFlightsUser} />
        <Route path="/Payments" component={Payments} />
        <Route path="/Airplanes" component={Airplanes} />
        <Route path="/AirplanesByOperator" component={AirplanesByOperator} />
        <Route path="/Users" component={Users} />




    </Switch>
)