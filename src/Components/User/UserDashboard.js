import React from 'react'

import { Link } from 'react-router-dom'
import { AdminIcon, AdminDiv, Title } from '../Admin/StyledAdmin';

export default function UserDashboard() {
    return (
        <AdminDiv className="reports">
                <Title>User Dashboard</Title>
                <br></br>
                <Link to={'/CurrFlightsUser'}>
                    <AdminIcon className="fa">&#xf022; Current Itinerary</AdminIcon>
                </Link>
                <Link to={'/PastFlightsUser'}>
                    <AdminIcon className="fa">&#xf187; Past Bookings</AdminIcon>
                </Link>
            </AdminDiv>
    )
}
let styles = {
    admin: {
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none',
        fontFamily: 'Rockwell'// font used in entire application
    }
 }


