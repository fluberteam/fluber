import React from 'react';
import { Link } from 'react-router-dom';
import { AdminIcon, AdminDiv } from './StyledAdmin';

export default function AdminDashboard() {
    return (
        <AdminDiv className="reports">
                <h1 style={title}>Admin Dashboard</h1><br></br>
                <Link className="test-users" to={'/Users'}>
                <AdminIcon className="fa">&#xf0c0; Users</AdminIcon>
                </Link>
                <Link className="test-available-flights" to={'/AvailableFlights'}>
                    <AdminIcon className="fa">&#xf0f2; Available Flights</AdminIcon>
                </Link>
                <Link  className="test-scheduled-flights"  to={'/ScheduledFlights'}>
                    <AdminIcon className="fa">&#xf145; Scheduled Flights</AdminIcon>
                </Link>
                <Link className="test-airplanes" to={'/Airplanes'}>
                    <AdminIcon className="fa">&#xf072; Airplanes</AdminIcon>
                </Link>
                <Link className="test-payments" to={'/Payments'}>
                    <AdminIcon className="fa">&#xf155; Payment List</AdminIcon>
                </Link>
            </AdminDiv>
    )
}

const title = {
    marginTop: 40,

}