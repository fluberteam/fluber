import axios from 'axios'

const GET_AIRPLANE = 'GET_AIRPLANE'
const GET_AIRPLANE_PENDING = 'GET_AIRPLANE_PENDING'
const GET_AIRPLANE_FULFILLED = 'GET_AIRPLANE_FULFILLED'
const GET_AIRPLANE_REJECTED = 'GET_AIRPLANE_REJECTED'

const CREATE_AIRPLANE = 'CREATE_AIRPLANE'
const CREATE_AIRPLANE_PENDING = 'CREATE_AIRPLANE_PENDING'
const CREATE_AIRPLANE_FULFILLED = 'CREATE_AIRPLANE_FULFILLED'
const CREATE_AIRPLANE_REJECTED = 'CREATE_AIRPLANE_REJECTED'

const UPDATE_AIRPLANE = 'UPDATE_AIRPLANE'
const UPDATE_AIRPLANE_PENDING = 'UPDATE_AIRPLANE_PENDING'
const UPDATE_AIRPLANE_FULFILLED = 'UPDATE_AIRPLANE_FULFILLED'
const UPDATE_AIRPLANE_REJECTED = 'UPDATE_AIRPLANE_REJECTED'


const DELETE_AIRPLANE = 'DELETE_AIRPLANE'
const DELETE_AIRPLANE_PENDING = 'DELETE_AIRPLANE_PENDING'
const DELETE_AIRPLANE_FULFILLED = 'DELETE_AIRPLANE_FULFILLED'
const DELETE_AIRPLANE_REJECTED = 'DELETE_AIRPLANE_REJECTED'


const initialState = {
    loading: false,
    getAirplaneData: [],
    deleteAirplaneData: '',
    updateAirplaneData: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_AIRPLANE_PENDING:
            return { ...state, loading: true }
        case GET_AIRPLANE_FULFILLED:
            return { ...state, getAirplaneData: action.payload.data, loading: false }
        case GET_AIRPLANE_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        case CREATE_AIRPLANE_PENDING:
            return { ...state, loading: true }
        case CREATE_AIRPLANE_FULFILLED:
            return { ...state, createAirplaneData: action.payload.data, loading: false }
        case CREATE_AIRPLANE_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        
        case DELETE_AIRPLANE_PENDING:
            return { ...state, loading: true }
        case DELETE_AIRPLANE_FULFILLED:
            return { ...state, deleteAirplaneData: null, loading: false }
        case DELETE_AIRPLANE_REJECTED:
            return { ...state, error: action.payload, loading: false}


        case UPDATE_AIRPLANE_PENDING:
            return { ...state, loading: true }
        case UPDATE_AIRPLANE_FULFILLED:
            return { ...state, updateAirplaneData: action.payload.data, loading: false }
        case UPDATE_AIRPLANE_REJECTED:
            return { ...state, error: action.payload, loading: false}

        default:
            return state
    }
}

export function createAirplane(createInfo) {
    return {
        type: CREATE_AIRPLANE,
        payload: axios.post('/api/airplanes', createInfo)
    }
}

export function getAirplanes() {
    return {
        type: GET_AIRPLANE,
        payload: axios.get('/api/airplanes')
    }
}

export function updateAirplane(id, updateInfo) {
    return {
        type: UPDATE_AIRPLANE,
        payload: axios.put(`/api/airplanes/${id}`, updateInfo)
    }
}

export function deleteAirplane(id) {
    return {
        type: DELETE_AIRPLANE,
        payload: axios.delete(`/api/airplanes/${id}`)
    }
}