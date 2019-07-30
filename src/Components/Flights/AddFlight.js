import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFlight } from '../../Redux/Reducers/flights';
import { AddFlightInput } from './StyledAddFlight';
import largeLogo from '../../Image/fluberlogo.png';
import { AddButton } from '../StyledComps/AddButton';
import { AddForm } from './StyledAddFlight';
import { FormButton } from './StyledAddFlight';

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
        // if(state.n_number === ''){
        //     return (
                
        //     )
        // }
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
                    {/* <LoginForm> */}
                    <AddForm>



                        <img src={largeLogo} alt="Large Logo" style={{ height: '100px' }} />
                        <h3 style={title}>Add Flight</h3>
                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='n_number'
                            placeholder='N-Number'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='dep_airport'
                            placeholder='Departure Airport'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='arr_airport'
                            placeholder='Arrival Airport'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type={depart}
                            onFocus={onDepart}
                            name='departure_time'
                            placeholder='Departure Time'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type={arrive}
                            onFocus={onArrive}
                            name='arrival_time'
                            placeholder='Arrival Time'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name="init_avail_seats"
                            placeholder='Initial Available Seats'
                            required
                            onChange={handleChange}
                        />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='curr_avail_seats'
                            placeholder='Current Available Seats'
                            required
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='price'
                            placeholder='Price'
                            required
                            autocomplete="off"
                            onChange={handleChange} />

                        <AddFlightInput
                            autoComplete="off"
                            type='text'
                            name='cutoff_time'
                            placeholder='Cutoff Time'
                            required
                            onChange={handleChange} />


                        <FormButton onClick={handleSubmit}>Add Flight</FormButton>
                        <FormButton onClick={toggle}>Cancel</FormButton>




                    </AddForm>

                    {/* </LoginForm> */}
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

const title = {
    color: '#0079BF',
    fontFamily: 'Rockwell'
}