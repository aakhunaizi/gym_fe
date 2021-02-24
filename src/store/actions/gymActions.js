import instance from "./instance";
import * as types from "./types";

export const fetchGyms = () => async (dispatch) => {
  try {
    const res = await instance.get("/gyms");
    dispatch({
      type: types.FETCH_GYMS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createGym = (newGym) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newGym) formData.append(key, newGym[key]);
    const res = await instance.post("/gyms", formData);
    dispatch({
      type: types.CREATE_GYM,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateGym = (updatedGym) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedGym) formData.append(key, updatedGym[key]);
    const res = await instance.put(`/gyms/${updatedGym.id}`, formData);
    dispatch({
      type: types.UPDATE_GYM,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteGym = (gymId) => async (dispatch) => {
  try {
    await instance.delete(`/gyms/${gymId}`);
    dispatch({
      type: types.DELETE_GYM,
      payload: gymId,
    });
  } catch (error) {
    console.error(error);
  }
};
