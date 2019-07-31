import React from 'react'
import { Link } from 'react-router-dom';
import { AdminIcon, AdminDiv, Title } from '../Admin/StyledAdmin';

export default function OperatorDashboard() {
    return (
        <AdminDiv className="reports">
                <Title>Operator Dashboard</Title><br></br>
                <Link to={'/AvailableFlightsByOperator'}>
                    <AdminIcon className="fa">&#xf0e0; Scheduled Flights</AdminIcon>   
                </Link>
                <Link to={'/AirplanesByOperator'}>
                    <AdminIcon className="fa">&#xf007; Airplanes</AdminIcon>
                </Link>
                <Link to={'/Payments'}>
                    <AdminIcon className="fa">&#xf155; Payment List</AdminIcon>  
                </Link>
                
                
                
                
            </AdminDiv>
    )
}
