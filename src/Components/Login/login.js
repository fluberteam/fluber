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
    console.log(props)
    return (
        <div>
            {props.users ? (props.users.status === 'a' ? <Redirect to='/admin' /> : (props.users.status === 'o' ? <Redirect to='/operator' /> : <Redirect to='/user' />)) : <Redirect to='/login' />}
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
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, { login })(Login)