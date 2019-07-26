import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFlights } from '../../Redux/Reducers/flights';
import AddFlight from './AddFlight';
import ListFlight from './ListFlight';

const AvailableFlights = (props) => {
    const { getFlights } = props

    useEffect(() => {
        getFlights()
    }, [getFlights])



    return (
        <div style={styles.admin}>
            <div>
                {/* <AddFlight/> */}
            </div>
            {/* <> */}
                <>
                    <tr >
                        <td style={styles.colOne}><h3>N-Number</h3></td>
                        <td style={styles.colTwo}><h3>Departure Ariport</h3></td>
                        <td style={styles.colThree}><h3>Arrival Ariport</h3></td>
                        <td style={styles.colFour}><h3>Departure Time</h3></td>
                        <td style={styles.colFive}><h3>Arrival Time</h3></td>
                        <td style={styles.colSix}><h3>Initial Available Seats</h3></td>
                        <td style={styles.colSeven}><h3>Available Seats</h3></td>
                        <td style={styles.colEight}><h3>Price</h3></td>
                        <td style={styles.colNine}><h3>Cutoff Time</h3></td>
                        <td style={styles.colTen}><h3>Edit/Delete</h3></td>

                    </tr>
                    <table>
                        {props.flights.map((flight, index) => {
                            return (
                                <ListFlight
                                    key={index}
                                    flight={flight} />
                            )
                        })}
                    </table>
                </>
            {/* </> */}
            Available Flights
        </div>
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
        fontFamily: 'times',
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

