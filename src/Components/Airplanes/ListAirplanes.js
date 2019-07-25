import React from 'react'
import { connect } from 'react-redux'
import { getAirplanes } from '../../Redux/Reducers/airplanes'



function ListAirplanes() {
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

export default connect(mapStateToProps, { getAirplanes })(ListAirplanes)


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

