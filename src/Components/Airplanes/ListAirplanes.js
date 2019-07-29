import React, {useState} from 'react'
import { connect } from 'react-redux'
// import { getAirplanes } from '../../Redux/Reducers/airplanes'
import { deleteAirplane } from '../../Redux/Reducers/airplanes'
import EditAirplane from './EditAirplane'





const ListAirplanes = props => {
    
    const airplane = props.airplane
    const [edit, setEdit] = useState(false)


    const toggle = () => {
        setEdit(!edit)
    }

    const deleteAirplane = (id) => {
        props.deleteAirplane(id)
        props.setupdate(true)

    }


    return (
        <>
            {
               edit  ?
                    <>
                        <EditAirplane
                            airplane={airplane}
                            setupdate={props.setupdate}
                            toggle={toggle}
                            handleClick={props.handleClick} />
                    </>
                    :
                    <>
                    <tr>
                        <td style={styles.colOne}>{airplane.n_number}</td>
                        <td style={styles.colTwo}>{airplane.certnumber}</td>
                        <td style={styles.colThree}>{'image'}</td>
                        <td style={styles.colFour}>{airplane.engine_id}</td>
                        <td style={styles.colFive}>{airplane.num_seats}</td>
                        <td style={styles.colSix}>{airplane.restroom? "true":"false"}</td>
                        <td style={styles.colSeven}>{airplane.flight_attn? "true":"false"}</td>
                        <td style={styles.colEight}>{airplane.refreshments? "true":"false"}</td>
                        <td style={styles.colNine}>{airplane.cruise_speed}</td>

                        <td style={styles.colTen}>
                            <span style={styles.edit}><button onClick={toggle}className="hoveredit">edit  / </button></span>
                            <span className="fa" style={styles.edit2} onClick={() => deleteAirplane(airplane.n_number)} ><button className="hoverdelete">   delete</button></span>
                        </td>
                    </tr>

                    </>
                        
            }
        </>
    )
}




export default connect(null, { deleteAirplane })(ListAirplanes)


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

