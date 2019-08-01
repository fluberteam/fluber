import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateAirplane } from '../../Redux/Reducers/airplanes'
import { StyledButton } from '../StyledComps/StyledButton';


const EditAirplane = props => {

    const airplane = props.airplane
    const toggle = props.toggle   
  
    // console.log('airplane test:', airplane )


    let [state, setState] = useState({
        n_number: airplane.n_number,
        certnumber: airplane.certnumber,
        img: null,
        engine_id: airplane.engine_id,
        num_seats: airplane.num_seats,
        restroom: airplane.restroom,
        flight_attn: airplane.flight_attn,
        refreshments: airplane.refreshments,
        cruise_speed: airplane.cruise_speed
    })

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    
    const handleClick = (id) => {
        let updatedAirplane = { ...props.airplane, ...state }
        props.updateAirplane(id, updatedAirplane)
        toggle(); // takes display back to original display
        props.setupdate(true)
  
    }


    return (



        <>
            <tr>
                <td style={styles.colOne}>
                    {state.n_number}
                </td>

                <td style={styles.colTwo}>
                    <input
                        style={styles.colTwo}
                        type="text"
                        name="certnumber"
                        placeholder="Cert Number"
                        onChange={handleChange}
                        value={state.certnumber} />
                </td>
                <td style={styles.colThree}>
                    <input
                        style={styles.colThree}
                        type="text"
                        name="img"
                        placeholder="Image Url"
                        onChange={handleChange}
                        value={'image'}/>
                </td>
                <td style={styles.colFour}>
                    <input
                        style={styles.colFour}
                        type="text"
                        name="engine_id"
                        placeholder="engine_id"
                        onChange={handleChange}
                        value={state.engine_id} />
                </td>
                <td style={styles.colFive}>
                    <input
                        style={styles.colFive}
                        type="text"
                        name="num_seats"
                        placeholder="Number of Seats"
                        onChange={handleChange}
                        value={state.num_seats} />
                </td>
                <td style={styles.colSix}>
                    <input
                        style={styles.colSix}
                        type="text"
                        name="restroom"
                        placeholder="Restroom"
                        onChange={handleChange}
                        value={state.restroom} />
                </td>
                <td style={styles.colSeven}>
                    <input
                        style={styles.colSeven}
                        type="text"
                        name="flight_attn"
                        placeholder="Flight Attendant"
                        onChange={handleChange}
                        value={state.flight_attn} />
                </td>
                <td style={styles.colEight}>
                    <input
                        style={styles.colEight}
                        type="text"
                        name="refreshments"
                        placeholder="refreshments"
                        onChange={handleChange}
                        value={state.refreshments} />
                </td>
                <td style={styles.colNine}>
                    <input
                        style={styles.colNine}
                        type="text"
                        name="cruise_speed"
                        placeholder="Cruise Speed"
                        onChange={handleChange}
                        value={state.cruise_speed} />
                </td>

                <td style={styles.colTen}>
                    <StyledButton onClick={() => handleClick(airplane.n_number)}>Save</StyledButton>
                </td>
        </tr >
        </>
    )
}

const mapStateToProps = state => {
    let { data: users } = state.users
    return { users }
}

export default connect(mapStateToProps, { updateAirplane })(EditAirplane)

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
        width: 75
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

