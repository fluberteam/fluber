import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firstSearch } from '../../Redux/Reducers/search'
import {StyledInput} from '../StyledComps/StyledInput'
import {LoginForm} from '../Login/StyledLogin'


const Search = props => {

    let [ state, setState ] = useState({from: '', to: '', date: '', passengers: 0})
    let [ focus, setFocus ] = useState('text')

    const handleChange = (e) => {
        let { name, value } = e.target
        // console.log(value)
        setState({ ...state, [name]: value})
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
        <LoginForm>
            <StyledInput 
                type="text"
                name="from"
                placeholder="Departure"
                onChange={handleChange} />
            <StyledInput 
                type="text"
                name="to"
                placeholder="Arrival"
                onChange={handleChange} />
            <StyledInput
                type={focus}
                onFocus={onFocus}
                name="date"
                placeholder='Departure Date'
                onChange={handleChange} />
            <StyledInput
                type="number" 
                name="passengers"
                placeholder="Passengers"
                onChange={handleChange} />
            <button onClick={submitSearch}>Submit</button>
        </LoginForm>
    )
}

const mapStateToProps = state => {
    let { searchData: search } = state.search
    return { search }
}

export default connect(mapStateToProps, { firstSearch })(Search)