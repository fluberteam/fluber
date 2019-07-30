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
        <section style={styles.admin}>
            <span>
                <div  className="displayWrapper">
                    <table>
                        <tbody>
                            <tr >
                                <td style={styles.colOne}><h3>N-Number</h3></td>
                                <td style={styles.colTwo}><h3>Departure Ariport</h3></td>
                                <td style={styles.colThree}><h3>Arrival Ariport</h3></td>
                                <td style={styles.colFour}><h3>Departure Time</h3></td>
                                <td style={styles.colFive}><h3>Arrival Time</h3></td>
                                <td style={styles.colSix}><h3>Initial Seats</h3></td>
                                <td style={styles.colSeven}><h3>Current Seats</h3></td>
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
    )
}

const mapStateToProps = state => {
    let { getFlightData: flights } = state.flights
    console.log(flights)
    return { flights }
}

export default connect(mapStateToProps, { getFlights })(AvailableFlights)

let styles = {
    admin: {
        fontSize: 18,
        marginTop: 40,
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

