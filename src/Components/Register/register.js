import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/Reducers/users'
import { Redirect } from 'react-router-dom'
import largeLogo from '../../Image/fluberlogo.png'
import { FormButton, AddFlightInput, AddForm } from '../Flights/StyledAddFlight';



const Register = props => {
    let [state, setState] = useState({ 
        first_name: '', 
        last_name: '', 
        email: '', 
        password: '', 
        status: '', 
        operator_num: '' 
    })

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }


    const handleSubmit = () => {
        props.register(state)
    }
         


    return (
       

        <div style={styles.div}>
        <AddForm>

        {props.users ? (props.users.status === 'a' ? <Redirect to='/admin' /> : (props.users.status === 'o' ? <Redirect to='/OperatorDashboard' /> : <Redirect to='/UserDashboard' />)) : <Redirect to='/register' />}
            <img src={largeLogo} alt="Large Logo" style={{height: '100px'}}/>
            <AddFlightInput
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={handleChange} />
           
            <AddFlightInput
                type='text'
                name='last_name'
                placeholder='Last Name'
                onChange={handleChange} />
            
            <AddFlightInput
                type='email'
                name='email'
                placeholder='E-mail'
                onChange={handleChange} />
            
            <AddFlightInput
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange} />
        <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <span>
           <input
                type='radio'
                name='status'
                value='u'
                onChange={handleChange}/>Passenger
            </span>
            <span>
            <input
                type='radio'
                name='status'
                value='o'
                onChange={handleChange}/>Operator 
            </span>
            </span>
           
            
            {state.status === 'o' &&
            <AddFlightInput
                type='text'
                name='operator_num'
                placeholder='Operator Certificate Number'
                onChange={handleChange} />
            
            }
            <FormButton style={{marginTop: '15px'}} onClick={handleSubmit}>Register</FormButton>

        </AddForm>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, { register })(Register)

let styles = {
    div: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightBlue',
        paddingBottom: '150px'

    }
}
