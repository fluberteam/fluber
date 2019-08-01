import axios from 'axios'
import { PassThrough } from 'stream';


const GET_ALL_SEARCH = 'GET_ALL_SEARCH'
const GET_ALL_SEARCH_PENDING = 'GET_ALL_SEARCH_PENDING'
const GET_ALL_SEARCH_FULFILLED = 'GET_ALL_SEARCH_FULFILLED'
const GET_ALL_SEARCH_REJECTED = 'GET_ALL_SEARCH_REJECTED'

const POST_USER_PURCHASE = 'POST_USER_PURCHASE'
const POST_USER_PURCHASE_PENDING = 'POST_USER_PURCHASE_PENDING'
const POST_USER_PURCHASE_FULFILLED = 'POST_USER_PURCHASE_FULFILLED'
const POST_USER_PURCHASE_REJECTED = 'POST_USER_PURCHASE_REJECTED'

const POST_OPER_PURCHASE = 'POST_OPER_PURCHASE'
const POST_OPER_PURCHASE_PENDING = 'POST_OPER_PURCHASE_PENDING'
const POST_OPER_PURCHASE_FULFILLED = 'POST_OPER_PURCHASE_FULFILLED'
const POST_OPER_PURCHASE_REJECTED = 'POST_OPER_PURCHASE_REJECTED'

const CLEAR_SEARCH_FIELD = 'CLEAR_SEARCH_FIELD'

const initialState = {
    loading: false,
    searchData: [],
    postUserData: [],
    postOperData: [],
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
        
        case POST_USER_PURCHASE_PENDING:
            return { ...state, loading: true }
        case POST_USER_PURCHASE_FULFILLED:
            return { ...state, postUserData: action.payload.data, loading: false }
        case POST_USER_PURCHASE_REJECTED:
            return { ...state, error: action.payload }

        case POST_OPER_PURCHASE_PENDING:
            return { ...state, loading: true }
        case POST_OPER_PURCHASE_FULFILLED:
            return { ...state, postOperData: action.payload.data, loading: false }
        case POST_OPER_PURCHASE_REJECTED:
            return { ...state, error: action.payload, loading: false }
        
        
        default:
            return state
    }
}

export function firstSearch(searchInfo) {
    return {
        type: GET_ALL_SEARCH,
        payload: axios.get(`/search/all?${searchInfo}`)
    }
}

export function clearSearch() {
    return {
        type: CLEAR_SEARCH_FIELD,
        payload: []
    }
}

export function postUserPurchase(user_id, flightInfo) {
    return {
        type: POST_USER_PURCHASE,
        payload: axios.post(`/purchases/users/${user_id}`, flightInfo)
    }
}
// the arguments for PostOperPurchase needs to include the user who is flying with them, how many are in their party and the flight number
export function PostOperPurchase(flight_num, user_id, passengers) {
    return {
        type: POST_OPER_PURCHASE,
        payload: axios.get(`/purchases/opers/${flight_num}`, {user_id, passengers})
    }
}