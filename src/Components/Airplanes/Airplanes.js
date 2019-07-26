import React, { useEffect, useState  } from 'react'
import { connect } from 'react-redux'
import { getAirplanes } from '../../Redux/Reducers/airplanes'
import ListAirplanes  from './ListAirplanes'
import AddAirplane  from './AddAirplane'

const Airplanes = props => {
    const {getAirplanes} = props
    const [update, setupdate] = useState(true)

    useEffect(() =>{
        console.log(props)
        if(update){
        getAirplanes()
        setupdate(false)
        }
        },[getAirplanes, update ])


        return (
            
            <section className="docWrapper">
                <section className="displayWrapper">
                    <section>
                        <AddAirplane
                        setupdate={setupdate} />
                    </section>
                </section>
                <span>
                    {/* {user && //if user is logged in, display appliances */}
                        <div className="displayWrapper">
                            <table>
                                <tbody>
                            <tr>
                                <td style={styles.colOne}><h3>N-Number</h3></td>
                                <td style={styles.colTwo}><h3>Operator ID</h3></td>
                                <td style={styles.colThree}><h3>Image </h3></td>
                                <td style={styles.colFour}><h3>Engine Type</h3></td>
                                <td style={styles.colFive}><h3>Seats</h3></td>
                                <td style={styles.colSix}><h3>Restroom</h3></td>
                                <td style={styles.colSeven}><h3>Flight Attendant</h3></td>
                                <td style={styles.colEight}><h3>Refreshements</h3></td>
                                <td style={styles.colNine}><h3>Cruise Speed</h3></td>
                                <td style={styles.colTen}><h3>Edit/Delete</h3></td>

                            </tr>
                                </tbody>
                            </table>
                            <table>
                            <tbody>
                            {props.airplanes.map((airplane, index) => {
                                return (
                                    <ListAirplanes
                                        key={index}
                                        airplane={airplane}
                                        setupdate={setupdate}/>
                                )
                            })}
                            </tbody>
                            </table>
                        </div>
                    {/* } */}

                </span>

            </section>
        )
    
}




//connect redux
let mapStateToProps = state => {
    let { getAirplaneData: airplanes } = state.airplanes
    return { airplanes }
}

export default connect(mapStateToProps, { getAirplanes })(Airplanes)

let styles = {
    colOne: {
        width: 150
    },
    colTwo: {
        width: 150
    },
    colThree: {
        width: 100
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
    },
    displayWrapper: {
        width: '90%', 
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto'
    }
}