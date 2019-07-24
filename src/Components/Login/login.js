import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../Redux/Reducers/users' 
import { Redirect } from 'react-router-dom'
import {StyledInput} from '../StyledComps/StyledInput'
import { LoginForm } from './StyledLogin'
import largeLogo from '../../Image/fluberlogo.png'
import { Link } from 'react-router-dom'
import '../../App.css'





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
        <div id='login' style={styles.div}>
            {props.users ? (props.users.status === 'a' ? <Redirect to='/admin' /> : (props.users.status === 'o' ? <Redirect to='/operator' /> : <Redirect to='/user' />)) : <Redirect to='/login' />}
            <LoginForm>
                <img style={{height: '100px'}} src={largeLogo} alt='large logo' />
                <div style={{display: 'flex', marginTop: '5px'}}>
                    <StyledInput 
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}/>
                </div>
                <div style={{display: 'flex', marginTop: '5px', marginBottom: '5px'}}>
                    <StyledInput 
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}/>
                </div>
                <button onClick={handleSubmit}>Login</button>
                <Link style={styles.register} to='/register'>Register</Link>
            </LoginForm>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, { login })(Login)

let styles = {
    div: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightBlue',
        paddingBottom: '150px'
    },
    register: {
        textDecoration: 'none',
        fontSize: '1.3em',
        color: 'black',
        display: 'flex',
        justifyContent: 'center'
    }
}