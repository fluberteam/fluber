import React from 'react'
import { connect } from 'react-redux'
import {LoginForm} from '../Login/StyledLogin'

const FoundFlights =props => {
    const flight = props.flight

    return (
        <div>
            <LoginForm>
                <span style={{display: 'flex'}}>
                    <p>Departing From: </p>
                    <p>{flight.dep_airport}</p>
                </span>
                <span style={{display: 'flex'}}>
                    <p>Arriving To: </p>
                    <p>{flight.arr_airport}</p>
                </span>
                {console.log(flight)}
            </LoginForm>
        </div>
    )
}

export default connect(null, null)(FoundFlights)
