import {
 GET_USERS,
 GET_USERS_SUCCESS,
 GET_USERS_FAILURE
} from "../actions";

const INITIAL_STATE={
  users:[]
}

export const allUserReducer = (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case GET_USERS:
      return{
        ...INITIAL_STATE,
      }
    case GET_USERS_SUCCESS:
      return{
        ...INITIAL_STATE,
          users:action.payload
      }
    case GET_USERS_FAILURE:
      return{
        ...INITIAL_STATE,
        error: action.payload,
      }
     default:
       return state  
  }
}