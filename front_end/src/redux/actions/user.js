import api from "../../utils/api";

export const GET_USER = "USERS/GET_USER"
export const GET_USER_SUCCESS = "USERS/GET_USER_SUCCESS"
export const GET_USER_FAILURE = "USERS/GET_USER_FAILURE"

export const GET_USERS = "USERS/GET_USERS"
export const GET_USERS_SUCCESS = "USERS/GET_USERS_SUCCESS"
export const GET_USERS_FAILURE = "USERS/GET_USERS_FAILURE"

export const REGISTER_USER = "USERS/REGISTER_USER"
export const REGISTER_USER_SUCCESS = "USERS/REGISTER_USER_SUCCESS"
export const REGISTER_USER_FAILURE = "USERS/REGISTER_USER_FAILURE"

export const USER_IMAGE_UPLOAD = "USERS/USER_IMAGE_UPLOAD";
export const USER_IMAGE_UPLOAD_SUCCESS = "USERS/USER_IMAGE_UPLOAD_SUCCESS";
export const USER_IMAGE_UPLOAD_FAILURE = "USERS/USER_IMAGE_UPLOAD_FAILURE";

export const USER_GROUP_UPLOAD = "USERS/SER_GROUP_UPLOAD";
export const USER_GROUP_UPLOAD_SUCCESS = "USERS/USER_GROUP_UPLOAD_SUCCESS";
export const USER_GROUP_UPLOAD_FAILURE = "USERS/USER_GROUP_UPLOAD_FAILURE";

export const DELETE_USER = "USERS/DELETE_USER"
export const DELETE_USER_SUCCESS = "USERS/DELETE_USER_SUCCESS"
export const DELETE_USER_FAILURE = "USERS/DELETE_USER_FAILURE"

export const getUser = (username, token) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER });
    const payload = await api.getUserInfo(username, token);

    dispatch({ type: GET_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.message,
    });
  }
};

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USERS });
    const payload = await api.getUsers();

    dispatch({ type: GET_USERS_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: err.message,
    });
  }
};

export const registerUser = ({ username, password, email, image }) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER });
    const payload = await api.registerUser({ username, password, email, image });

    dispatch({ type: GET_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: err.message,
    });
  }
};

export const uploadUserImage = (username, formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_IMAGE_UPLOAD });
    const payload = await api.putUserImage(username, formData);
    dispatch({ type: USER_IMAGE_UPLOAD_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USER_IMAGE_UPLOAD_FAILURE,
      payload: err.message,
    });
  }
};

export const addToUserGroups = (username, groupName) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_GROUP_UPLOAD });
    const payload = await api.putUserEvent(username, groupName);
    dispatch({ type: USER_GROUP_UPLOAD_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: USER_GROUP_UPLOAD_FAILURE,
      payload: err.message,
    });
  }
};


export const deleteUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER });
    const payload = await api.deleteUser(username);
    dispatch({ type: DELETE_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAILURE,
      payload: err.message,
    });
  }
};