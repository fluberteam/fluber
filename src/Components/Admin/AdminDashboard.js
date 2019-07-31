import React from 'react';
import { Link } from 'react-router-dom';
import { AdminIcon, AdminDiv, Title } from './StyledAdmin';

export default function AdminDashboard() {
    return (
        <AdminDiv className="reports">
                <Title>Admin Dashboard</Title><br></br>
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
