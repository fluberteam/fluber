import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFlight } from '../../Redux/Reducers/flights';
import { WhiteCard } from '../Footer/WhiteCard';

const AddFlight = (props) => {
    let [showAddState, setShowAddState] = useState(false)
    console.log(props)



    return (
      <div>
          Add Flight
      </div>
    )
}

const mapStateToProps = state => {
    let { getFlightData: newFlight } = state.flights
    return { newFlight };
}

export default connect(mapStateToProps, { createFlight })(AddFlight)