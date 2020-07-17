import{
  GET_GROUP_DATA,
  GET_GROUP_DATA_SUCCESS,
  GET_GROUP_DATA_FAILURE
} from '../actions'

const INITIAL_STATE={
  groupName:"",
  location: "",
  about: "",
  image: {},
  eventList: [],
  error:""
}

export const groupReducer = (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case GET_GROUP_DATA:
      return{
        ...INITIAL_STATE,
      }
    case GET_GROUP_DATA_SUCCESS:
      return{
        ...INITIAL_STATE,
        groupName: action.payload.group.groupName,
        location: action.payload.group.location,
        about: action.payload.group.about,
        image: action.payload.group.image,
        eventList: action.payload.group.eventList
      }
    case GET_GROUP_DATA_FAILURE:
      return{
        ...INITIAL_STATE,
        error:action.payload,
      }
    default:
      return state
  }
}