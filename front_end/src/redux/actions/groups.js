import api from "../../utils/api";

export const GET_GROUP_DATA = "GROUPS/GGET_GROUP_DATA"
export const GET_GROUP_DATA_SUCCESS = "GROUPS/GET_GROUP_DATA_SUCCESS"
export const GET_GROUP_DATA_FAILURE = "GROUPS/GET_GROUP_DATA_FAILURE"

export const groupData= (groupData) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_GROUP_DATA });
    const payload = await api.getGroupData(groupData);

    dispatch({ type: GET_GROUP_DATA_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: GET_GROUP_DATA_FAILURE,
      payload: err.message,
    });
  }
};