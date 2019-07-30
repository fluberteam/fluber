import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../Redux/Reducers/users'
import { StyledButton } from '../StyledComps/StyledButton';



const EditUser = props => {

    const users = props.users
    const toggle = props.toggle 
    
    console.log('user test:', users )

    let [state, setState] = useState({
        first_name: users.first_name,
        last_name: users.last_name,
        email: users.email,
        password: users.password,
        status: users.status,
        address1: users.address1,
        address2: users.address2,
        city: users.city,
        state: users.state,
        zipcode: users.zipcode,
        phone: users.phone,
        operator_num: users.operator_num

    })


    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    
    const handleClick = (id) => {
        let updatedUser = { ...props.users, ...state }
        props.updateUser(id, updatedUser)
        toggle(); // takes display back to original display
        props.setupdate(true)
  
    }

  
    return (



        <>
            <tr>

                <td style={styles.colOne}>
                    <input
                        style={styles.colOne}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={users.first_name} />
                </td>
                <td style={styles.colTwo}>
                    <input
                        style={styles.colTwo}
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={state.last_name}/>
                </td>
                <td style={styles.colThree}>
                    <input
                        style={styles.colThree}
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={state.email} />
                </td>
                <td style={styles.colFive}>
                    <input
                        style={styles.colFive}
                        type="text"
                        name="status"
                        placeholder="User Status"
                        onChange={handleChange}
                        value={state.status} />
                </td>
                <td style={styles.colSix}>
                    <input
                        style={styles.colSix}
                        type="text"
                        name="address1"
                        placeholder="Adress1"
                        onChange={handleChange}
                        value={state.address1} />
                </td>
                <td style={styles.colEight}>
                    <input
                        style={styles.colEight}
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        value={state.city} />
                </td>
                <td style={styles.colNine}>
                    <input
                        style={styles.colNine}
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                        value={state.state} />
                </td>
                <td style={styles.colTen}>
                    <input
                        style={styles.colTen}
                        type="text"
                        name="zipcode"
                        placeholder="Zip Code"
                        onChange={handleChange}
                        value={state.zipcode} />
                </td>
                <td style={styles.colEleven}>
                    <input
                        style={styles.colEleven}
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={state.phone} />
                </td>
                <td style={styles.colTwelve}>
                    <input
                        style={styles.colTwelve}
                        type="text"
                        name="operator_num"
                        placeholder="Operator Number"
                        onChange={handleChange}
                        value={state.operator_num} />
                </td>

                <td style={styles.colThirteen}>
                    <StyledButton onClick={() => handleClick(users.user_id)}>Save</StyledButton>
                </td>
        </tr >
        </>
    )
}

const mapStateToProps = state => {
    let { data: users } = state.users
    return { users }
}

export default connect(mapStateToProps, { updateUser })(EditUser)

let styles = {
    admin: {
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column ',
        textDecoration: 'none',
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
        width: 10
    },
    colFive: {
        width: 75
    },
    colSix: {
        width: 75
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
    }
}

