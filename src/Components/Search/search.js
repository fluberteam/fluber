import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import search from '../../Redux/Reducers/search'


const Search = () => {

    let [ state, setState ] = useState({from: '', to: '', date: '', seats: ''})

    const handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value})
    }

    const submitSearch = props => {
        // turn the state into a template string and pass that through to the back
        let searchInfo = `${state.from}&${state.to}&${state.date}&${state.seats}`
        props.login(searchInfo)
    }

    return (
        <div>
            <input 
                type="text"
                name="from"
                placeholder="Departure"
                onChange={handleChange} />
            <input 
                type="text"
                name="to"
                placeholder="Arrival"
                onChange={handleChange} />
            <input 
                type="date"
                name="date"
                placeholder={Date()}
                onChange={handleChange} />
            <input
                type="number" 
                name="passengers"
                placeholder="0" />
            <button conClick={submitSearch}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    let { searchData: search } = state.search
    return { search }
}

export default connect(mapStateToProps, { search })(Search)