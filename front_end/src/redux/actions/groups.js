import api from "../../utils/api";

export const GET_GROUP_DATA = "GROUPS/GET_GROUP_DATA"
export const GET_GROUP_DATA_SUCCESS = "GROUPS/GET_GROUP_DATA_SUCCESS"
export const GET_GROUP_DATA_FAILURE = "GROUPS/GET_GROUP_DATA_FAILURE"

export const GET_ALL_GROUPS = "GROUPS/GET_ALL_GROUPS"
export const GET_ALL_GROUPS_SUCCESS = "GROUPS/GET_ALL_GROUPS_SUCCESS"
export const GET_ALL_GROUPS_FAILURE = "GROUPS/GET_ALL_GROUPS_FAILURE"

export const groupData= (groupName) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_GROUP_DATA });
    const payload = await api.getGroup(groupName);

    dispatch({ type: GET_GROUP_DATA_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_GROUP_DATA_FAILURE,
      payload: err.message,
    });
  }
};

export const getAllGroups= () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_GROUPS });
    const payload = await api.getGroups();

    dispatch({ type: GET_ALL_GROUPS_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_ALL_GROUPS_FAILURE,
      payload: err.message,
    });
  }
};


