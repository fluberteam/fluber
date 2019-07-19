import React from 'react';
import { Link } from 'react-router-dom';


export default function header() {
    return (
        <div style={styles}>
            <Link style={font} to="/">Home</Link>
            <Link style={font} to="/search">Search</Link>
        </div>
    )
}

const styles = {
    width: '100%',
    height: '100px',
    backgroundColor: '#0079BF',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'sticky',
    top: '0'
}

const font = {
    textDecoration: 'none',
    fontSize: '30px',
    color: '#c0c0c0',
    margin: '20px',
    fontFamily: 'Rockwell'
}