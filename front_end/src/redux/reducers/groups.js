import {
  GET_GROUP_DATA,
  GET_GROUP_DATA_SUCCESS,
  GET_GROUP_DATA_FAILURE,
  GET_ALL_GROUPS,
  GET_ALL_GROUPS_SUCCESS,
  GET_ALL_GROUPS_FAILURE
} from '../actions'

const INITIAL_STATE = {
  groupName: "",
  location: "",
  about: "",
  image: {},
  eventList: [],
  error: "",
  groups: []
}

export const groupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GROUP_DATA:
      return {
        ...INITIAL_STATE,
      }
    case GET_GROUP_DATA_SUCCESS:
      return {
        ...INITIAL_STATE,
        groupName: action.payload.groupName,
        location: action.payload.location,
        about: action.payload.about,
        image: action.payload.image,
        eventList: action.payload.eventList
      }
    case GET_GROUP_DATA_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      }



    case GET_ALL_GROUPS:
      return {
        ...INITIAL_STATE,
      }
    case GET_ALL_GROUPS_SUCCESS:
      return {
        ...INITIAL_STATE,
        groups: action.payload
      }
    case GET_ALL_GROUPS_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      }
    default:
      return state
  }
}