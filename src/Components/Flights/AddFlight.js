import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFlight } from '../../Redux/Reducers/flights';
import { StyledInput } from '../StyledComps/StyledInput'
import { LoginForm } from '../Login/StyledLogin'
import largeLogo from '../../Image/fluberlogo.png'
import { AddButton } from '../StyledComps/AddButton';

const AddFlight = (props) => {
    let [depart, setDepart] = useState('text')
    let [arrive, setArrive] = useState('text')

    let [state, setState] = useState({
        n_number: '',
        dep_airport: '',
        departure_time: '',
        arr_airport: '',
        arrival_time: '',
        init_avail_seats: '',
        curr_avail_seats: '',
        price: '',
        cutoff_time: ''
    })

    const [addFlight, setAddFlight] = useState(false)

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleSubmit = () => {
        props.createFlight(state)
        toggle()
        props.setupdate(true)
    }

    const toggle = () => {
        setAddFlight(!addFlight)
    }

    const onDepart = () => {
        setDepart('datetime-local')
        console.log(depart)
    }

    const onArrive = () => {
        setArrive('datetime-local')
        console.log(arrive)
    }

    return (
        <>
            {addFlight ?
                <div>
                    <LoginForm>



                        <img src={largeLogo} alt="Large Logo" style={{ height: '100px' }} />
                        <h3>Add Flight</h3>
                        <StyledInput
                            type='text'
                            name='n_number'
                            placeholder='N-Number'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type='text'
                            name='dep_airport'
                            placeholder='Departure Airport'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type='text'
                            name='arr_airport'
                            placeholder='Arrival Airport'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type={depart}
                            onFocus={onDepart}
                            name='departure_time'
                            placeholder='Departure Time'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type={arrive}
                            onFocus={onArrive}
                            name='arrival_time'
                            placeholder='Arrival Time'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type='text'
                            name="init_avail_seats"
                            placeholder='Initial Available Seats'
                            required
                            onChange={handleChange}
                        />

                        <StyledInput
                            type='text'
                            name='curr_avail_seats'
                            placeholder='Current Available Seats'
                            required
                            onChange={handleChange} />

                        <StyledInput
                            type='text'
                            name='price'
                            placeholder='Price'
                            required
                            autocomplete="off"
                            onChange={handleChange} />

                        <StyledInput
                            type='text'
                            name='cutoff_time'
                            placeholder='Cutoff Time'
                            required
                            onChange={handleChange} />


                        <button styles={styles.addbutton} onClick={handleSubmit}>Add Flight</button>
                        <button className="addbutton" onClick={toggle}>Cancel</button>





                    </LoginForm>
                </div>

                :
                <section>
                    <section>
                        <AddButton onClick={toggle}>Add Flight</AddButton>
                    </section>
                </section>}
        </>
    )
}

const mapStateToProps = state => {
    let { createFlightData: newFlight } = state.flights
    return { newFlight };
}

export default connect(mapStateToProps, { createFlight })(AddFlight)


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
    },
    addbutton: {
        border: 'none',
        fontSize: '20px',
        color: 'green',
        margin: '10px 0 20px',
        opacity: 1,
        transition: '0.3s',
        cursor: 'pointer',
        padding: '10px',
        background: 'none',
    }
}