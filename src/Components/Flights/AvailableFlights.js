import React from 'react';
import { connect } from 'react-redux';
import { getFlights } from '../../Redux/Reducers/flights';
import AddFlight from './AddFlight';

function AvailableFlights() {


    return (
        <div style={styles.admin}>
            {/* <AddFlight/> */}
            Available Flights
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, {getFlights})(AvailableFlights)

let styles = {
    admin: {
        fontSize: 18,
        fontFamily: 'times', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none',
        fontFamily: 'Rockwell'
    }
}

