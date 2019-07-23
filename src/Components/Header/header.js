import React from 'react';
import { Link } from 'react-router-dom';
import miniLogo from '../../Image/smallLogoNoOutline.png'
import largeLogo from '../../Image/fluberlogo.png'
import '../../App.css'
import {logout} from '../../Redux/Reducers/users'
import {connect} from 'react-redux'


const Header = props => {
    return (
        <div style={styles}>
            {/* Used <a> tag to link logo to Landing page -----Alma */}
            <a href="/"><div>
                <img className="largeLogo" src={largeLogo} alt="large logo" />
                <img className="miniLogo" src={miniLogo} alt="large logo" />
            </div></a>
            <div>
                <Link style={font} to="/login">Home</Link>
                <Link style={font} to="/search">Search</Link>
                {props.users && <Link style={font} onClick={props.logout} to="/">Logout</Link>}
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, {logout})(Header)

const styles = {
    width: '100%',
    height: '100px',
    zIndex: 5,
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