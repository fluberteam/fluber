import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFlightsOperator } from '../../Redux/Reducers/flights';
import AddFlight from './AddFlight';
import ListFlight from './ListFlight';

const AvailableFlightsOperator = (props) => {
    const { getFlightsOperator } = props
    const [update, setupdate] = useState(true)

    useEffect(() => {
        if (update) {
            getFlightsOperator()
            setupdate(false)
        }
    }, [getFlightsOperator, update])



    return (
        <section style={styles.admin}>

            <h1>Available Flights</h1>
            <br />
            <span>
                <div>
                    <table>
                        <tbody>
                            <tr >
                                <td style={styles.colOne}><h3>N-Number</h3></td>
                                <td style={styles.colTwo}><h3>Departure Airport</h3></td>
                                <td style={styles.colThree}><h3>Arrival Airport</h3></td>
                                <td style={styles.colFour}><h3>Departure Time</h3></td>
                                <td style={styles.colFive}><h3>Arrival Time</h3></td>
                                <td style={styles.colSix}><h3>Initial Available Seats</h3></td>
                                <td style={styles.colSeven}><h3>Available Seats</h3></td>
                                <td style={styles.colEight}><h3>Price</h3></td>
                                <td style={styles.colNine}><h3>Cutoff Time</h3></td>
                                <td style={styles.colTen}><h3>Edit/Delete</h3></td>

                            </tr>
                        </tbody>

                    </table>
                    <table>
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
            <section>
                <section>
                    <AddFlight 
                    setupdate={setupdate}/>
                </section>
            </section>
        </section>
    )
}

const mapStateToProps = state => {
    let { getFlightData: flights } = state.flights
    let {user} = state.users
    console.log(flights,state)
    return { flights, user }
}

export default connect(mapStateToProps, { getFlightsOperator })(AvailableFlightsOperator)

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
        width: 150
    },
    colTwo: {
        width: 150
    },
    colThree: {
        width: 100,
    },
    colFour: {
        width: 150
    },
    colFive: {
        width: 150
    },
    colSix: {
        width: 100
    },
    colSeven: {
        width: 200
    },
    colEight: {
        width: 150
    },
    colNine: {
        width: 200
    },
    colTen: {
        width: 200
    },
    displayWrapper: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto'
    }
}

