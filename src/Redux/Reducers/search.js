import axios from 'axios'


const GET_ALL_SEARCH = 'GET_ALL_SEARCH'
const GET_ALL_SEARCH_PENDING = 'GET_ALL_SEARCH_PENDING'
const GET_ALL_SEARCH_FULFILLED = 'GET_ALL_SEARCH_FULFILLED'
const GET_ALL_SEARCH_REJECTED = 'GET_ALL_SEARCH_REJECTED'

const initialState = {
    loading: false,
    searchData: [],
    error: null
}

export default function( state = initialState, action) {
    switch(action.type) {
        case GET_ALL_SEARCH_PENDING:
            return { ...state, loading: true }
        case GET_ALL_SEARCH_FULFILLED:
            return { ...state, searchData: action.payload.data, loading: false }
        case GET_ALL_SEARCH_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        default:
            return state
    }
}

export function getAll(searchInfo) {
    return {
        type: GET_ALL_SEARCH,
        payload: axios.get(`/search/all?${searchInfo}`)
    }
}