import { combineReducers } from 'redux'

import users from './users'
import airplanes from './airplanes'
import flights from './flights'
import search from './search'

export default combineReducers({users, airplanes, flights, search})
