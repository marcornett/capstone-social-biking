import api from "../../utils/api";

export const GET_USER = "USERS/GET_USER"
export const GET_USER_SUCCESS = "USERS/GET_USER_SUCCESS"
export const GET_USER_FAILURE = "USERS/GET_USER_FAILURE"

export const USER_IMAGE_UPLOAD = "USERS/USER_IMAGE_UPLOAD";
export const USER_IMAGE_UPLOAD_SUCCESS = "USERS/USER_IMAGE_UPLOAD_SUCCESS";
export const USER_IMAGE_UPLOAD_FAILURE = "USERS/USER_IMAGE_UPLOAD_FAILURE";

export const DELETE_USER = "USERS/DELETE_USER"
export const DELETE_USER_SUCCESS = "USERS/DELETE_USER_SUCCESS"
export const DELETE_USER_FAILURE = "USERS/DELETE_USER_FAILURE"

export const getUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER });
    const payload = await api.getUserInfo(credentials);

    dispatch({ type: GET_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.message,
    });
  }
};

export const uploadUserImage = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_IMAGE_UPLOAD });
    const payload = await api.putUserImage(data);
    dispatch({ type: USER_IMAGE_UPLOAD_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USER_IMAGE_UPLOAD_FAILURE,
      payload: err.message,
    });
  }
};

export const deleteUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER });
    const payload = await api.deleteUser(credentials);
    dispatch({ type: DELETE_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAILURE,
      payload: err.message,
    });
  }
};