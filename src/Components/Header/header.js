import React from 'react';
import { Link } from 'react-router-dom';
import miniLogo from '../../Image/noun_Airplane_9163.png'
import largeLogo from '../../Image/fluberlogo.png'
import '../../App.css'


export default function header() {
    return (
        <div style={styles}>
            {/* Used <a> tag to link logo to Landing page -----Alma */}
            <a href="/"><div>
                <img className="largeLogo" src={largeLogo} alt="large logo" />
                <img className="miniLogo" src={miniLogo} alt="large logo" />
            </div></a>
            <div>
                <Link style={font} to="/">Home</Link>
                <Link style={font} to="/search">Search</Link>
            </div>
        </div>
    )
}

const styles = {
    width: '100%',
    height: '100px',
    backgroundColor: '#0079BF',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '0',

}

const font = {
    textDecoration: 'none',
    fontSize: '1.5em',
    color: '#c0c0c0',
    margin: '20px',
    fontFamily: 'Rockwell'
}