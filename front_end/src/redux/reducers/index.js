import { combineReducers } from 'redux'
import { authReducer } from './auth'
import{ userReducer} from "./user"
import { groupReducer} from "./groups"
// import reducers

export default combineReducers({
    // add reducers
    auth: authReducer,
    user: userReducer,
    group: groupReducer
})