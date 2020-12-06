import { combineReducers } from 'redux'
import { authReducer } from './auth'
import{ userReducer} from "./user"
import { groupReducer} from "./groups"
import{ allUserReducer }from "./allUsers"
// import reducers

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    group: groupReducer,
    allUsers: allUserReducer
})