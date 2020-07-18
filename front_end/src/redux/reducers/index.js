import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { userReducer } from "./user"
import { groupReducer } from "./groups"

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    group: groupReducer
})