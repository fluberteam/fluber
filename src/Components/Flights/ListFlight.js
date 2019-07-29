import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { getFlights } from '../../Redux/Reducers/flights';
import { deleteFlight } from '../../Redux/Reducers/flights';
import EditFlight from './EditFlight';

const ListFlight = (props) => {
    const flight = props.flight
    const [edit, setEdit] = useState(false)

    const toggle = () => {
        setEdit(!edit)
    }

    const deleteFlight = (flight_num) => {
        props.deleteFlight(flight_num)
        props.setupdate(true)
    }


    return (
        <>
            {
                edit ?
                    <>
                        <EditFlight
                            flight={flight}
                            toggle={toggle}
                            setupdate={props.setupdate} />
                    </>
                    :
                    <table>
                        <tbody>
                            <tr>
                                <td style={styles.colOne}>{flight.n_number}</td>
                                <td style={styles.colTwo}>{flight.dep_airport}</td>
                                <td style={styles.colThree}>{flight.arr_airport}</td>
                                <td style={styles.colFour}>{flight.departure_time}</td>
                                <td style={styles.colFive}>{flight.arrival_time}</td>
                                <td style={styles.colSix}>{flight.init_avail_seats}</td>
                                <td style={styles.colSeven}>{flight.curr_avail_seats}</td>
                                <td style={styles.colEight}>{flight.price}</td>
                                <td style={styles.colNine}>{flight.cutoff_time}</td>

                                <td style={styles.colTen}>
                                    <span style={styles.edit}><button onClick={toggle} className="hoveredit">Edit </button></span>
                                    <span className="fa" style={styles.edit2} onClick={() => deleteFlight(flight.flight_num)} ><button className="hoverdelete">   Delete</button></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

            }
        </>
    )
}



export default connect(null, { deleteFlight })(ListFlight)


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
    }
}

