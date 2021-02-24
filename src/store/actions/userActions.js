import instance from "./instance";
import * as types from "../actions/types";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: types.FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const res = await instance.put(`/users/${updatedUser.id}`, updatedUser);
    dispatch({
      type: types.UPDATE_USER,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
