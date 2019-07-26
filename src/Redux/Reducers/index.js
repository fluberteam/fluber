import { combineReducers } from 'redux'

import users from './users'
import airplanes from './airplanes'
import flights from './flights'

export default combineReducers({users, airplanes, flights})

