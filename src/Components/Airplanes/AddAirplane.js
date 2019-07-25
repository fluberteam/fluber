import React from 'react'
import { connect } from 'react-redux'
import { createAirplane } from '../../Redux/Reducers/airplanes'



function AddAirplane() {
    return (
        <div style={styles.admin}>
            Add Airplane
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, { createAirplane })(AddAirplane)


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
    }
}

