import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firstSearch } from '../../Redux/Reducers/search'
import {StyledInput} from '../StyledComps/StyledInput'


const Search = props => {

    let [ state, setState ] = useState({from: '', to: '', date: '', passengers: 0})

    const handleChange = (e) => {
        let { name, value } = e.target
        // console.log(value)
        setState({ ...state, [name]: value})
    }

    const submitSearch = () => {
        // turn the state into a template string and pass that through to the back
        let searchInfo = `dep_airport=${state.from}&arr_airport=${state.to}&departure_time=${state.date}&curr_avail_seats=${state.passengers}`
        // console.log(typeof state.passengers)
        console.log(searchInfo)
        props.firstSearch(searchInfo)
    }

    return (
        <div>
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
                type="date"
                name="date"
                placeholder={Date()}
                onChange={handleChange} />
            <StyledInput
                type="number" 
                name="passengers"
                placeholder="0"
                onChange={handleChange} />
            <button onClick={submitSearch}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    let { searchData: search } = state.search
    return { search }
}

export default connect(mapStateToProps, { firstSearch })(Search)