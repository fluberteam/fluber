import { combineReducers } from 'redux'

import users from './users'
import airplanes from './airplanes'
import search from './search'

export default combineReducers({users, airplanes, search})