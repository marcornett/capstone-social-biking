import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions";

const INITIAL_STATE = {
  token: false,
  username: "",
  user: {},
  error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
      };
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        token: action.payload.token,
        username: action.payload.username,
        user: action.payload.user
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};