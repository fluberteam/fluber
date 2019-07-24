import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { search } from '../../Redux/Reducers/search'


const Search = () => {

    let [ state, setState ] = useState({from: '', to: '', date: '', seats: ''})

    const handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value})
    }

    const submitSearch = props => {
        props.login(state)
    }

    return (
        <div>
            <input 
                type="text"
                name="from"
                placeholder="City"
                onChange={handleChange} />
            <input name="to" />
            <input name="date" />
            <input name="seats" />

        </div>
    )
}

const mapStateToProps = state => {
    let { searchData: search } = state.search
    return { search }
}

export default connect(mapStateToProps, { search })(Search)