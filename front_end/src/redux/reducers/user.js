import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  USER_IMAGE_UPLOAD,
  USER_IMAGE_UPLOAD_SUCCESS,
  USER_IMAGE_UPLOAD_FAILURE,
  USER_GROUP_UPLOAD,
  USER_GROUP_UPLOAD_SUCCESS,
  USER_GROUP_UPLOAD_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from '../actions'


const INITIAL_STATE = {
  username: "",
  password: "",
  email: "",
  groups: [],
  image: {},
  token: false,
  error: ""
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...INITIAL_STATE,
      }
    case GET_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.password,
        groups: action.payload.groups,
        image: action.payload.image,
        token: action.payload.token
      }
    case GET_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      }
    case USER_IMAGE_UPLOAD:
      return {
        ...INITIAL_STATE,
      }
    case USER_IMAGE_UPLOAD_SUCCESS:
      return {
        ...INITIAL_STATE,
        image: action.payload.image,
      }
    case USER_IMAGE_UPLOAD_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      }
    case USER_GROUP_UPLOAD:
      return {
        ...INITIAL_STATE,
      }
    case USER_GROUP_UPLOAD_SUCCESS:
      return {
        ...INITIAL_STATE,
        groups: action.payload.groups,
      }
    case USER_GROUP_UPLOAD_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      }
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
      }
    case DELETE_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
      }
    case DELETE_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload
      }

    default:
      return state
  }
}