import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDashboard() {
    return (
        <div style={styles.admin} className="reports">
                <h2>User Dashboard</h2><br></br>
                <Link to={'/CurrFlightsUser'}>
                    <h3><span style={styles.icon} className="fa">&#xf0e0; </span>   Current Itenirary</h3>
                </Link>
                <Link to={'/PastFlightsUser'}>
                    <h3><span style={styles.icon} className="fa">&#xf0e0; </span>   Past Bookings</h3>
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
        fontFamily: 'Rockwell'
    }
}


