import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFlights } from '../../Redux/Reducers/flights';
import AddFlight from './AddFlight';
import ListFlight from './ListFlight';

const AvailableFlights = (props) => {
    const { getFlights } = props
    const [update, setupdate] = useState(true)

    useEffect(() => {
        if (update) {
            getFlights()
            setupdate(false)
        }
    }, [getFlights, update])




    return (
        <div>
        <section style={styles.admin}>
            <span>
                <div  className="displayWrapper">
                    <table>
                        <tbody>
                            <tr >
                                <th style={styles.colOne}><h3>N-Number</h3></th>
                                <th style={styles.colTwo}><h3>Departure Ariport</h3></th>
                                <th style={styles.colThree}><h3>Arrival Ariport</h3></th>
                                <th style={styles.colFour}><h3>Departure Time</h3></th>
                                <th style={styles.colFive}><h3>Arrival Time</h3></th>
                                <th style={styles.colSix}><h3>Initial Seats</h3></th>
                                <th style={styles.colSeven}><h3>Current Seats</h3></th>
                                <th style={styles.colEight}><h3>Price</h3></th>
                                <th style={styles.colNine}><h3>Cutoff Time</h3></th>
                                <th style={styles.colTen}><h3>Edit/Delete</h3></th>

                            </tr>
                        </tbody>

                    </table>
                    <table className="lines">
                        <tbody>
                            {props.flights.map((flight) => {
                                return (
                                    <ListFlight
                                        key={flight.flight_num}
                                        flight={flight}
                                        setupdate={setupdate} />
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </span>

            <section className="displayWrapper">
                <section>
                    <AddFlight 
                    setupdate={setupdate}/>
                </section>
            </section>
        </section>
        </div>
    )
}

const mapStateToProps = state => {
    let { getFlightData: flights } = state.flights
    return { flights }
}

export default connect(mapStateToProps, { getFlights })(AvailableFlights)

let styles = {
    admin: {
        fontSize: 18,
        marginTop: 20,
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

