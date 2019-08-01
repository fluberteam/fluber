import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../Redux/Reducers/users'
import ListUsers from './ListUsers'

const Users = props => {
    const {getUsers} = props
    const [update, setupdate] = useState(true)
   
    useEffect(() =>{
        if(update){
        getUsers()
        setupdate(false)
        }
        },[getUsers, update ])

        // let users = props.users

        return (
            <section style={styles.admin}>
                <section className="displayWrapper">
                    <section>
                       
                    </section>
                </section>
                <span>
                    {/* {user && //if user is logged in, display appliances */}
                        <div className="displayWrapper">
                            <table>
                                <tbody>
                            <tr>
                                <th style={styles.colOne}><h4>First Name</h4></th>
                                <th style={styles.colTwo}><h4>Last Name</h4></th>
                                <th style={styles.colThree}><h4>E-mail </h4></th>
                                {/* <th style={styles.colFour}><h4>Password</h4></th> */}
                                <th style={styles.colFive}><h4>Status</h4></th>
                                <th style={styles.colSix}><h4>Address</h4></th>
                                {/* <th style={styles.colSeven}><h4></h4></th> */}
                                <th style={styles.colEight}><h4>City</h4></th>
                                <th style={styles.colNine}><h4>State</h4></th>
                                <th style={styles.colTen}><h4>Zip Code</h4></th>
                                <th style={styles.colEleven}><h4>Phone</h4></th>
                                <th style={styles.colTwelve}><h4>Operator Number</h4></th>
                                <th style={styles.colThirteen}><h4>Edit/Delete</h4></th>

                            </tr>
                                </tbody>
                            </table>
                            <table className="lines">
                            <tbody>
                            {props.users.map((user, index) => {
                                return (
                                    <ListUsers
                                        key={index}
                                        user={user}
                                        setupdate={setupdate}
                                        />
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
    let { getUsersData: users } = state.users
    return { users }
}

export default connect(mapStateToProps, { getUsers })(Users)

let styles = {
    admin: {
        fontSize: 18,
        marginTop: 20,
        fontFamily: 'Rockwell'
    },
    colOne: {
        width: 100
    },
    colTwo: {
        width: 100
    },
    colThree: {
        width: 200
    },
    colFour: {
        width: 150
    },
    colFive: {
        width: 75
    },
    colSix: {
        width: 150
    },
    colSeven: {
        width: 200
    },
    colEight: {
        width: 100
    },
    colNine: {
        width: 50
    },
    colTen: {
        width: 100
    },
    colEleven: {
        width: 100
    },
    colTwelve: {
        width: 200
    },
    colThirteen: {
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