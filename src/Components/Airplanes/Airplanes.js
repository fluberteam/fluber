import React, { useState, useEffect  } from 'react'
import { connect } from 'react-redux'
import { getAirplanes } from '../../Redux/Reducers/airplanes'
import { AddAirplane } from './AddAirplane'
import { ListAirplanes } from './ListAirplanes'


const Airplanes = props => {
    const {getAirplanes} = props
    useEffect(() =>{
        getAirplanes()
    },[])

    let [state, setState] = useState({
        n_number: '',
        certnumber: '',
        img: '',
        engin_id: '',
        num_seats: '',
        restroom: '',
        flight_attn: '',
        refreshments: '',
        cruise_speed: '',

        airplane: []

    })



    

    

        return (
            <section className="docWrapper">
                <section className="displayWrapper">
                    <section className="addRentalSection">
                        <AddAirplane />
                    </section>
                </section>
                <span>
                    {/* {user && //if user is logged in, display appliances */}
                        <div className="displayWrapper">
                            <tr>
                                <td style={styles.colOne}><h3>N-Number</h3></td>
                                <td style={styles.colTwo}><h3>Operator ID</h3></td>
                                <td style={styles.colThree}><h3>Image </h3></td>
                                <td style={styles.colFour}><h3>Engine Type</h3></td>
                                <td style={styles.colFive}><h3>Seats</h3></td>
                                <td style={styles.colSix}><h3>Restroom</h3></td>
                                <td style={styles.colSix}><h3>Flight Attendant</h3></td>
                                <td style={styles.colSix}><h3>Refreshements</h3></td>
                                <td style={styles.colSix}><h3>Cruise Speed</h3></td>
                            </tr>
                            <table>
                            {state.airplanes.map((airplane, index) => {
                                return (
                                    <ListAirplanes
                                        key={airplane.n_number}
                                        index={index}
                                        airplane={airplane} />
                                )
                            })}
                            </table>
                        </div>
                    {/* } */}

                </span>

            </section>
        )
    
}




//connect redux
let mapStateToProps = state => {
    let { getAirplaneData: airplane } = state.airplane
    return { airplane }
}

export default connect(mapStateToProps, { getAirplanes })(Airplanes)

let styles = {
    colOne: {
        width: 200
    },
    colTwo: {
        width: 100
    },
    colThree: {
        width: 150
    },
    colFour: {
        width: 175
    },
    colFive: {
        width: 75
    },
    colSix: {
        width: 200
    }
}