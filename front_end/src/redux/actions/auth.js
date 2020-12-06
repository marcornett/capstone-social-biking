import api from "../../utils/api";

export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";

export const login = (username, password) => async (dispatch, getState) => {
  console.log(username, password)
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(username, password);
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    await api.logout();
  } finally {
    dispatch({ type: LOGOUT });
  }
};