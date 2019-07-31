import React from 'react'
import { connect } from 'react-redux'
import {StyledSearch} from './StyledSearch'
import Moment from 'react-moment'
import Purchase from './Purchase'



const FoundFlights =props => {
    const flight = props.flight
    const passengers = props.passengers
    return (
        <div>
            <StyledSearch>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Departing From:</b> {flight.dep_airport}</p>
                    <p><b>Arriving To:</b> {flight.arr_airport}</p>
                </div>
                <div style={{display: 'flex'}}>
                    <p><b>Departure Date & Time:</b> <Moment format="LLL">{flight.departure_time}</Moment></p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p><b>Arrival Date & Time:</b> <Moment format="LLL">{flight.arrival_time}</Moment></p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Seats Available:</b> {flight.curr_avail_seats}</p>
                    <p><b>Seats Requested:</b> {passengers}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Price: </b> {flight.price}</p>
                    <Purchase 
                        flight={flight}
                        seatsRequested={passengers}/>
                </div>
                {/* {console.log(flight)} */}
            </StyledSearch>
        </div>
    )
}

export default connect(null, null)(FoundFlights)
