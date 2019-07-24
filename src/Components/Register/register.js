import React, { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../../Redux/Reducers/users'
import { Redirect } from 'react-router-dom'



const Register = props => {
    let [state, setState] = useState({ first_name: '', last_name: '', email: '', password: '', status: '', operator_num: '' })

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }


    const handleSubmit = () => {
        // console.log(555, state)
        props.register(state)
    }
         


    return (
       

        <>
        <div>
        {props.users ? (props.users.status === 'a' ? <Redirect to='/admin' /> : (props.users.status === 'o' ? <Redirect to='/operator' /> : <Redirect to='/user' />)) : <Redirect to='/register' />}
            <p><input
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={handleChange} />
            </p>
            <p><input
                type='text'
                name='last_name'
                placeholder='Last Name'
                onChange={handleChange} />
            </p>
            <p><input
                type='email'
                name='email'
                placeholder='E-mail'
                onChange={handleChange} />
            </p>
            <p><input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange} />
            </p>
            <p><input
                type='radio'
                name='status'
                value='u'
                // onClick={toggleOperator}
                onChange={handleChange}/>  Passenger 
            </p>
            <p><input
                type='radio'
                name='status'
                value='o'
                // onClick={toggleOperator}
                onChange={handleChange}/>  Operator 
            </p>
            {state.status === 'o' &&
            <p><input
                type='text'
                name='operator_num'
                placeholder='Operator Certificate Number'
                onChange={handleChange} />
            </p>
            }
            <button onClick={handleSubmit}>Register</button>

        </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    let { data: users } = state.users
    return {users}
}

export default connect(mapStateToProps, { register })(Register)


