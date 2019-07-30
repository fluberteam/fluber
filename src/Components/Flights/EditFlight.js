import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFlight } from '../../Redux/Reducers/flights';
import { StyledButton } from '../StyledComps/StyledButton';

const EditFlight = props => {
    const flight = props.flight
    const toggle = props.toggle

    let [state, setState] = useState({
        n_number: flight.n_number,
        dep_airport: flight.dep_airport,
        departure_time: flight.departure_time,
        arr_airport: flight.arr_airport,
        arrival_time: flight.arrival_time,
        init_avail_seats: flight.init_avail_seats,
        curr_avail_seats: flight.curr_avail_seats,
        price: flight.price,
        cutoff_time: flight.cutoff_time
    })

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleClick = (id) => {
        let updatedFlight = { ...props.flight, ...state }
        props.updateFlight(id, updatedFlight)
        toggle()
        props.setupdate(true)
    }

    return (
        <tbody>
            <tr>
                <td style={styles.colOne}>
                    {state.n_number}
                </td>

                <td style={styles.colTwo}>
                    <input
                        style={styles.colTwo}
                        type="text"
                        name="dep_airport"
                        placeholder="Departure Airport"
                        onChange={handleChange}
                        value={state.dep_airport}/>
                </td>
                <td style={styles.colThree}>
                    <input
                        style={styles.colThree}
                        type="text"
                        name="arr_airport"
                        placeholder="Arrival Airport"
                        onChange={handleChange}
                        value={state.arr_airport} />
                </td>
                <td style={styles.colFour}>
                    <input
                        style={styles.colFour}
                        type="datetime-local"
                        name="departure_time"
                        placeholder="Departure Time"
                        onChange={handleChange}
                        value={state.departure_time} />
                </td>
                <td style={styles.colFive}>
                    <input
                        style={styles.colFive}
                        type="datetime-local"
                        name="arrival_time"
                        placeholder="Arrival Time"
                        onChange={handleChange}
                        value={state.arrival_time} />
                </td>
                <td style={styles.colSix}>
                    <input
                        style={styles.colSix}
                        type="text"
                        name="init_avail_seats"
                        placeholder="Initital Available Seats"
                        onChange={handleChange}
                        value={state.init_avail_seats} />
                </td>
                <td style={styles.colSeven}>
                    <input
                        style={styles.colSeven}
                        type="text"
                        name="curr_avail_seats"
                        placeholder="Current Available Seats"
                        onChange={handleChange}
                        value={state.curr_avail_seats} />
                </td>
                <td style={styles.colEight}>
                    <input
                        style={styles.colEight}
                        type="text"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={state.price} />
                </td>
                <td style={styles.colNine}>
                    <input
                        style={styles.colNine}
                        type="text"
                        name="cutoff_time"
                        placeholder="Cutoff Time"
                        onChange={handleChange}
                        value={state.cutoff_time} />
                </td>

                <td style={styles.colTen}>
                    <StyledButton onClick={() => handleClick(flight.flight_num)}>Save</StyledButton>
                </td>
            </tr >
        </tbody>
    )
}

const mapStateToProps = state => {
    let { data: users } = state.users
    return { users }
}

export default connect(mapStateToProps, { updateFlight })(EditFlight)


let styles = {
    admin: {
        // fontSize: 18,
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

