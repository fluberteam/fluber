import React from 'react'
import { Link } from 'react-router-dom';
import { AdminIcon, AdminDiv } from '../Admin/StyledAdmin';

export default function OperatorDashboard() {
    return (
        <AdminDiv className="reports">
                <h1 style={title}>Operator Dashboard</h1><br></br>
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

const title = {
    marginTop: 40,

}