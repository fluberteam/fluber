import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_PENDING = 'GET_USER_PENDING'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'
const GET_USER_REJECTED = 'GET_USER_REJECTED'

const GET_USERS = 'GET_USERS'
const GET_USERS_PENDING = 'GET_USERS_PENDING'
const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED'
const GET_USERS_REJECTED = 'GET_USERS_REJECTED'

const REGISTER_USER = 'REGISTER_USER'
const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

const LOGIN_USER = 'LOGIN_USER'
const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_PENDING = 'LOGOUT_USER_PENDING'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'
const LOGOUT_USER_REJECTED = 'LOGOUT_USER_REJECTED'

const UPDATE_USER = 'UPDATE_USER'
const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING'
const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED'
const UPDATE_USER_REJECTED = 'UPDATE_USER_REJECTED'

const DELETE_USER = 'DELETE_USER'
const DELETE_USER_PENDING = 'DELETE_USER_PENDING'
const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED'
const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED'



const initialState = {
    loading: false,
    data: [],
    getUsersData: [],
    updateUserData: [],
    error: null,
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_PENDING:
            return { ...state, loading: true }
        case GET_USER_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case GET_USER_REJECTED:
            return { ...state, error: action.payload, loading: false }

        case GET_USERS_PENDING:
            return { ...state, loading: true }
        case GET_USERS_FULFILLED:
            return { ...state, getUsersData: action.payload.data, loading: false }
        case GET_USERS_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        case REGISTER_USER_PENDING:
            return { ...state, loading: true }
        case REGISTER_USER_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case REGISTER_USER_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        case LOGIN_USER_PENDING:
            return { ...state, loading: true }
        case LOGIN_USER_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case LOGIN_USER_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        case LOGOUT_USER_PENDING:
            return { ...state, loading: true }
        case LOGOUT_USER_FULFILLED:
            return { ...state, data: null, loading: false }
        case LOGOUT_USER_REJECTED:
            return { ...state, error: action.payload, loading: false}

        case UPDATE_USER_PENDING:
            return { ...state, loading: true }
        case UPDATE_USER_FULFILLED:
            return { ...state, updateUserData: action.payload.data, loading: false }
        case UPDATE_USER_REJECTED:
            return { ...state, error: action.payload, loading: false}

        case DELETE_USER_PENDING:
            return { ...state, loading: true }
        case DELETE_USER_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case DELETE_USER_REJECTED:
            return { ...state, error: action.payload, loading: false}

        default:
            return state
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/currentUser')
    }
}

export function getUsers() {
    return {
        type: GET_USERS,
        payload: axios.get('/auth/getUsers')
    }
}

export function login(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', loginInfo)
    }
}

export function logout() {
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

export function register(registerInfo) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', registerInfo)
    }
}

export function updateUser(id, updateInfo) {
    return {
        type: UPDATE_USER,
        payload: axios.put(`/auth/updateUser/${id}`, updateInfo)
    }
}

export function deleteUser(id, updateInfo) {
    return {
        type: DELETE_USER,
        payload: axios.delete(`/auth/deleteUser/${id}`, updateInfo)
    }
}