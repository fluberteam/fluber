import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../Redux/Reducers/users' 
import { Redirect } from 'react-router-dom'



const Login = props => {
    let [ state, setState ] = useState({email: '', password: ''})
    

    const handleChange = e => {
        let { name, value } = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = () => {
        props.login(state)
    }

    return (
        <div>
            {props.user.status === 'a' ? <Redirect to='/admin' /> : (props.user.status === 'o' ? <Redirect to='/operator' /> : <Redirect to='/user' />)}
            <input 
                type='email'
                name='email'
                placeholder='email'
                onChange={handleChange}/>
            <input 
                type='password'
                name='password'
                placeholder='password'
                onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    let { data: user } = state.user
    return user
}

export default connect(mapStateToProps, { login })(Login)