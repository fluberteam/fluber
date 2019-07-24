import React from 'react'
import { Link } from 'react-router-dom';


export default function AdminDashboard() {
    return (
        <div style={styles.admin} className="reports">
                <h2>Admin Dashboard</h2><br></br>
                <Link to={'/ListUsers'}>
                <h3><span style={styles.icon} className="fa">&#xf155; </span>  Users</h3>
                </Link>
                <Link to={'/ListOperators'}>
                    <h3><span style={styles.icon} className="fa">&#xf200; </span>  Operators </h3>
                </Link>
                <Link to={'/AvailableFlights'}>
                    <h3><span style={styles.icon} className="fa">&#xf080; </span>  Available Flights</h3>
                </Link>
                <Link to={'/ScheduledFlights'}>
                    <h3><span style={styles.icon} className="fa">&#xf0e0; </span>   Scheduled Flights With Passengers</h3>
                </Link>
                <Link to={'/ListAirplanes'}>
                    <h3><span style={styles.icon} className="fa">&#xf007; </span>  Airplanes</h3>
                </Link>
                <Link to={'/ListPayments'}>
                    <h3><span style={styles.icon} className="fa">&#xf155; </span>  Payment List</h3>
                </Link>
                
                
                
                
            </div>
    )
}

let styles = {
    admin: {
        fontSize: 18,
        fontFamily: 'times', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none'
    },
    icon: {
        fontSize: '25px'
    }
}