import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/Reducers/users'
import { Redirect } from 'react-router-dom'
import { StyledInput } from '../StyledComps/StyledInput'
import {LoginForm} from '../Login/StyledLogin'
import largeLogo from '../../Image/fluberlogo.png'



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
        <LoginForm>

        {props.users ? (props.users.status === 'a' ? <Redirect to='/admin' /> : (props.users.status === 'o' ? <Redirect to='/operator' /> : <Redirect to='/user' />)) : <Redirect to='/register' />}
            <img src={largeLogo} alt="Large Logo" style={{height: '100px'}}/>
            <StyledInput
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={handleChange} />
           
            <StyledInput
                type='text'
                name='last_name'
                placeholder='Last Name'
                onChange={handleChange} />
            
            <StyledInput
                type='email'
                name='email'
                placeholder='E-mail'
                onChange={handleChange} />
            
            <StyledInput
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
            <StyledInput
                type='text'
                name='operator_num'
                placeholder='Operator Certificate Number'
                onChange={handleChange} />
            
            }
            <button onClick={handleSubmit}>Register</button>

        </LoginForm>
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
