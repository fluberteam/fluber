import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firstSearch, clearSearch } from '../../Redux/Reducers/search'
// import {StyledInput} from '../StyledComps/StyledInput'
// import {LoginForm} from '../Login/StyledLogin'
import { AddFlightInput, AddForm, FormButton, Selector } from '../Flights/StyledAddFlight'

import FoundFlights from './FoundFlights'
import { Title, AdminDiv } from '../Admin/StyledAdmin';


const Search = props => {

    let [state, setState] = useState({ from: '', to: '', date: '', passengers: 0 })
    let [focus, setFocus] = useState('text')
    let clearSearch = props.clearSearch
    useEffect(() => {

    }, [clearSearch])
    // console.log(state)

    const handleChange = (e) => {
        let { name, value } = e.target
        // console.log(value)
        setState({ ...state, [name]: value })
    }

    const handleClear = () => {
        props.clearSearch()
    }

    const onFocus = () => {
        setFocus('date')
        // console.log(focus)
    }

    const submitSearch = () => {
        // turn the state into a template string and pass that through to the back
        let searchInfo = `depFrom=${state.from}&arriveTo=${state.to}&datePicked=${state.date}&seatAvailable=${state.passengers}`
        props.firstSearch(searchInfo)
        

    }

    return (
        <AdminDiv>
            {props.search.length >= 1 ?
                <AdminDiv>
                    <FormButton style={{margin: '20px', fontSize: '20px', width: '300px', height: '40px', backgroundColor: 'red'}} onClick={handleClear}>Clear Search</FormButton>
                    {props.search.map((flight, index) => {
                        return (
                            <FoundFlights
                                key={index}
                                flight={flight}
                                passengers={state.passengers}
                                clear={handleClear} />)
                    })}
                </AdminDiv> :
                <AdminDiv>
                    <Title>Search For Flights</Title>
                    <AddForm style={{ position: 'static', marginTop: '50px' }}>
                        <AddFlightInput
                            type="text"
                            name="from"
                            placeholder="Departure"
                            onChange={handleChange} />
                        <AddFlightInput
                            type="text"
                            name="to"
                            placeholder="Arrival"
                            onChange={handleChange} />
                        <AddFlightInput
                            type={focus}
                            onFocus={onFocus}
                            name="date"
                            placeholder='Departure Date'
                            onChange={handleChange} />
                        <AddFlightInput
                            type="number"
                            name="passengers"
                            placeholder="Passengers"
                            onChange={handleChange} />
                        <FormButton onClick={submitSearch}>Submit</FormButton>
                    </AddForm>
                </AdminDiv>
            }
        </AdminDiv>
    )
}

const mapStateToProps = state => {
    let { searchData: search } = state.search
    return { search }
}

export default connect(mapStateToProps, { firstSearch, clearSearch })(Search)