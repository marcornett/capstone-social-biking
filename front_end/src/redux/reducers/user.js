import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_IMAGE_UPLOAD,
  USER_IMAGE_UPLOAD_SUCCESS,
  USER_IMAGE_UPLOAD_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from '../actions'


const INITIAL_STATE={
  username:"",
  password:"",
  email:"",
  groups:[],
  image:{},
  error:""
}

 export const userReducer = (state=INITIAL_STATE,action)=>{
   switch(action.type){
     case GET_USER:
       return{
         ...INITIAL_STATE,
       }
     case GET_USER_SUCCESS:
       return{
         ...INITIAL_STATE,
         username: action.payload.user.username,
         password: action.payload.user.password,
         email: action.payload.user.password,
         groups: action.payload.user.groups,
         image: action.payload.user.image,
       }
     case GET_USER_FAILURE:
       return{
         ...INITIAL_STATE,
         error: action.payload,
       }
     case USER_IMAGE_UPLOAD:
       return {
         ...INITIAL_STATE,
       }
       case USER_IMAGE_UPLOAD_SUCCESS:
         return{
           ...INITIAL_STATE,
           image: action.payload.user.image,
         }
      case USER_IMAGE_UPLOAD_FAILURE:
        return{
          ...INITIAL_STATE,
          error: action.payload,
        }
      case DELETE_USER:
        return {
          ...INITIAL_STATE,
        }
      case DELETE_USER_SUCCESS:
        return{
          ...INITIAL_STATE,
        }
      case  DELETE_USER_FAILURE:
        return{
          ...INITIAL_STATE,
          error: action.payload
        } 

      default:
        return state  
   }
 }