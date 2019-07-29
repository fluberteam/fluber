import React from 'react'
import { Link } from 'react-router-dom';


export default function OperatorDashboard() {
    return (
        <div style={styles.admin} className="reports">
                <h2>Operator Dashboard</h2><br></br>
                <Link to={'/ScheduledFlights'}>
                    <h3><span style={styles.icon} className="fa">&#xf0e0; </span>   Scheduled Flights</h3>
                </Link>
                <Link to={'/Airplanes'}>
                    <h3><span style={styles.icon} className="fa">&#xf007; </span>  Airplanes</h3>
                </Link>
                <Link to={'/Payments'}>
                    <h3><span style={styles.icon} className="fa">&#xf155; </span>  Payment List</h3>
                </Link>
                
                
                
                
            </div>
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
        fontFamily: ''
    },
    icon: {
        fontSize: '25px',
        textDecoration: 'none'
    }
}