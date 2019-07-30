import React, {useState} from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../Redux/Reducers/users'
import EditUser from './EditUser'
import { StyledButton } from '../StyledComps/StyledButton';




const ListUsers = props => {
    
    const users = props.user
    const [edit, setEdit] = useState(false)

    // console.log('list test:', users)

    const toggle = () => {
        setEdit(!edit)
    }

    const deleteUser = (id) => {
        props.deleteUser(id)
        props.setupdate(true)

    }

    // console.log('listUsers test:', users)

    return (
        <>
            {
               edit  ?
                    <>
                        <EditUser
                            EditUsers={props.user}
                            setupdate={props.setupdate}
                            toggle={toggle}
                            handleclick={props.handleClick}/>
                    </>
                    :
                    <>
                    <tr>
                        <td style={styles.colOne}key="key">{users.first_name}</td>
                        <td style={styles.colTwo}>{users.last_name}</td>
                        <td style={styles.colThree}>{users.email}</td>
                        {/* <td style={styles.colFour}>{users.password}</td> */}
                        <td style={styles.colFive}>{users.status}</td>
                        <td style={styles.colSix}>{users.address1}</td>
                        {/* <td style={styles.colSeven}>{users.adress2}</td> */}
                        <td style={styles.colEight}>{users.city}</td>
                        <td style={styles.colNine}>{users.state}</td>
                        <td style={styles.colTen}>{users.zipcode}</td>
                        <td style={styles.colEleven}>{users.phone}</td>
                        <td style={styles.colTwelve}>{users.operator_num}</td>


                        <td style={styles.Thirteen}>
                            <StyledButton onClick={toggle}className="hoveredit">Edit</StyledButton>
                            <StyledButton onClick={() => deleteUser(users.user_id)} style={{backgroundColor: 'red'}}>Delete</StyledButton>
                        </td>
                    </tr>

                    </>
                        
            }
        </>
    )
}




export default connect(null, { deleteUser })(ListUsers)


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

