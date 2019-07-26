import axios from 'axios'

const GET_FLIGHT = 'GET_FLIGHT'
const GET_FLIGHT_PENDING = 'GET_FLIGHT_PENDING'
const GET_FLIGHT_FULFILLED = 'GET_FLIGHT_FULFILLED'
const GET_FLIGHT_REJECTED = 'GET_FLIGHT_REJECTED'

const CREATE_FLIGHT = 'CREATE_FLIGHT'
const CREATE_FLIGHT_PENDING = 'CREATE_FLIGHT_PENDING'
const CREATE_FLIGHT_FULFILLED = 'CREATE_FLIGHT_FULFILLED'
const CREATE_FLIGHT_REJECTED = 'CREATE_FLIGHT_REJECTED'

const UPDATE_FLIGHT = 'UPDATE_FLIGHT'
const UPDATE_FLIGHT_PENDING = 'UPDATE_FLIGHT_PENDING'
const UPDATE_FLIGHT_FULFILLED = 'UPDATE_FLIGHT_FULFILLED'
const UPDATE_FLIGHT_REJECTED = 'UPDATE_FLIGHT_REJECTED'


const DELETE_FLIGHT = 'DELETE_FLIGHT'
const DELETE_FLIGHT_PENDING = 'DELETE_FLIGHT_PENDING'
const DELETE_FLIGHT_FULFILLED = 'DELETE_FLIGHT_FULFILLED'
const DELETE_FLIGHT_REJECTED = 'DELETE_FLIGHT_REJECTED'


const initialState = {
    loading: false,
    getFlightData: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FLIGHT_PENDING:
            return { ...state, loading: true }
        case GET_FLIGHT_FULFILLED:
            return { ...state, getFlightData: action.payload.data, loading: false }
        case GET_FLIGHT_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        case CREATE_FLIGHT_PENDING:
            return { ...state, loading: true }
        case CREATE_FLIGHT_FULFILLED:
            return { ...state, createFlightData: action.payload.data, loading: false }
        case CREATE_FLIGHT_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        
        case DELETE_FLIGHT_PENDING:
            return { ...state, loading: true }
        case DELETE_FLIGHT_FULFILLED:
            return { ...state, deleteFlightData: null, loading: false }
        case DELETE_FLIGHT_REJECTED:
            return { ...state, error: action.payload, loading: false}


        case UPDATE_FLIGHT_PENDING:
            return { ...state, loading: true }
        case UPDATE_FLIGHT_FULFILLED:
            return { ...state, upadateFlightData: action.payload.data, loading: false }
        case UPDATE_FLIGHT_REJECTED:
            return { ...state, error: action.payload, loading: false}

        default:
            return state
    }
}

export function createFlight(createInfo) {
    return {
        type: CREATE_FLIGHT,
        payload: axios.post('/flights/createFlight', createInfo)
    }
}

export function getFlights() {
    return {
        type: GET_FLIGHT,
        payload: axios.get('/flights/getFlights')
    }
}

export function updateFlight(id, updateInfo) {
    return {
        type: UPDATE_FLIGHT,
        payload: axios.put(`/flights/editFlight/${id}`, updateInfo)
    }
}

export function deleteFlight(id) {
    return {
        type: DELETE_FLIGHT,
        payload: axios.delete(`'/flights/deleteFlight/${id}`)
    }
}