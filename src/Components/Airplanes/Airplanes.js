import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAirplanes } from '../../Redux/Reducers/airplanes'
import ListAirplanes from './ListAirplanes'
import AddAirplane from './AddAirplane'

const Airplanes = props => {

    const { getAirplanes } = props
    const [update, setupdate] = useState(true)

    useEffect(() => {
        if (update) {
            getAirplanes()
            setupdate(false)
        }
    }, [getAirplanes, update])

    return (
      
        <section style={styles.admin}>

            <span>
                {/* {user && //if user is logged in, display appliances */}
                <div className="displayWrapper">
                    <table>
                        <tbody>
                            <tr>
                                <th style={styles.colOne}><h3>N-Number</h3></th>
                                <th style={styles.colTwo}><h3>Operator ID</h3></th>
                                <th style={styles.colThree}><h3>Image </h3></th>
                                <th style={styles.colFour}><h3>Engine Type</h3></th>
                                <th style={styles.colFive}><h3>Seats</h3></th>
                                <th style={styles.colSix}><h3>Restroom</h3></th>
                                <th style={styles.colSeven}><h3>Flight Attendant</h3></th>
                                <th style={styles.colEight}><h3>Refreshements</h3></th>
                                <th style={styles.colNine}><h3>Cruise Speed</h3></th>
                                <th style={styles.colTen}><h3>Edit/Delete</h3></th>

                            </tr>
                        </tbody>
                    </table>
                    <table className="lines"> 
                        <tbody>
                            {props.airplanes.map((airplane, index) => {
                                return (
                                    <ListAirplanes
                                        key={index}
                                        airplane={airplane}
                                        setupdate={setupdate} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* } */}

            </span>
            <section className="displayWrapper">
                <section>
                    <AddAirplane
                        setupdate={setupdate} />
                </section>
            </section>
        </section>
    )

}




//connect redux
let mapStateToProps = state => {
    let { getAirplaneData: airplanes } = state.airplanes
    // console.log(airplanes)
    return { airplanes }
}

export default connect(mapStateToProps, { getAirplanes })(Airplanes)

let styles = {
    admin: {
        fontSize: 18,
        fontFamily: 'Rockwell',
        marginTop: 40,
    },
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
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
        height: '100%',
        zIndex: 15
    }
}