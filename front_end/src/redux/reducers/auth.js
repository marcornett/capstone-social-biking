import { 
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT
} from "../actions";

const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
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
        isAuthenticated: action.payload.token,
        username:action.payload.username,
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