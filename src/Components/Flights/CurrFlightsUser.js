import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { currFlightsByUser } from '../../Redux/Reducers/flights';
import AddFlight from './AddFlight';
import ListFlight from './ListFlight';
import { Title } from '../Admin/StyledAdmin';

const CurrFlightsUser = (props) => {
    const { currFlightsByUser } = props
    const [update, setupdate] = useState(true)

    useEffect(() => {
        if (update) {
            currFlightsByUser()
            setupdate(false)
        }
    }, [currFlightsByUser, update])



    return (
        <section style={styles.admin}>

            <Title>Currently Booked Flights</Title>
            <br />
            <span>
                <div>
                    <table>
                        <tbody>
                            <tr >
                                <th style={styles.colOne}><h3>N-Number</h3></th>
                                <th style={styles.colTwo}><h3>Departure Airport</h3></th>
                                <th style={styles.colThree}><h3>Arrival Airport</h3></th>
                                <th style={styles.colFour}><h3>Departure Time</h3></th>
                                <th style={styles.colFive}><h3>Arrival Time</h3></th>
                                <th style={styles.colSix}><h3>Initial Available Seats</h3></th>
                                <th style={styles.colSeven}><h3>Available Seats</h3></th>
                                <th style={styles.colEight}><h3>Price</h3></th>
                                <th style={styles.colNine}><h3>Cutoff Time</h3></th>
                                <th style={styles.colTen}><h3>Edit/Delete</h3></th>

                            </tr>
                        </tbody>

                    </table>
                    <table className="lines">
                        <tbody>
                            {props.flights.map((flight, index) => {
                                return (
                                    <ListFlight
                                        key={index}
                                        flight={flight}
                                        setupdate={setupdate} />
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </span>
            {/* <section>
                <section>
                    <AddFlight 
                    setupdate={setupdate}/>
                </section>
            </section> */}
        </section>
    )
}

const mapStateToProps = state => {
    let { getFlightData: flights } = state.flights
    let {user} = state.users
    console.log(flights,state)
    return { flights, user }
}

export default connect(mapStateToProps, { currFlightsByUser })(CurrFlightsUser)

let styles = {
    admin: {
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none',
        fontFamily: 'Rockwell'
    },
    colOne: {
        width: 150,
    },
    colTwo: {
        width: 150,
    },
    colThree: {
        width: 100,
    },
    colFour: {
        width: 275,
    },
    colFive: {
        width: 275,
    },
    colSix: {
        width: 100,
    },
    colSeven: {
        width: 100,
    },
    colEight: {
        width: 100,
    },
    colNine: {
        width: 100,
    },
    colTen: {
        width: 200,
    },
    displayWrapper: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto'
    }
}

