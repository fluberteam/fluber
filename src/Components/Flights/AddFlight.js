import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFlight } from '../../Redux/Reducers/flights';
import { WhiteCard } from '../Footer/WhiteCard';

const AddFlight = (props) => {
    let [showAddState, setShowAddState] = useState(false)
    console.log(props)



    return (
      <div style={styles.admin}>
          Add Flight
      </div>
    )
}

const mapStateToProps = state => {
    let { getFlightData: newFlight } = state.flights
    return { newFlight };
}

export default connect(mapStateToProps, { createFlight })(AddFlight)


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