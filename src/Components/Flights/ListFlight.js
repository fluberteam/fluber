import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { getFlights } from '../../Redux/Reducers/flights';
import { deleteFlight } from '../../Redux/Reducers/flights';
import EditFlight from './EditFlight';
import {StyledButton} from '../StyledComps/StyledButton';
import Moment from 'react-moment';

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
                                <td style={styles.colFour}><Moment format="LLL">{flight.departure_time}</Moment></td>
                                <td style={styles.colFive}><Moment format="LLL">{flight.arrival_time}</Moment></td>
                                <td style={styles.colSix}>{flight.init_avail_seats}</td>
                                <td style={styles.colSeven}>{flight.curr_avail_seats}</td>
                                <td style={styles.colEight}>$ {flight.price}</td>
                                <td style={styles.colNine}>{flight.cutoff_time}</td>

                                <td style={styles.colTen}>
                                   <StyledButton onClick={toggle}>Edit </StyledButton>
                                   <StyledButton onClick={() => deleteFlight(flight.flight_num)} style={{backgroundColor: 'red'}}>Delete</StyledButton>
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
}

