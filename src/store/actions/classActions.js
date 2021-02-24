import instance from "./instance";
import * as types from "./types";

export const fetchClasses = () => async (dispatch) => {
  try {
    const res = await instance.get("/classes");
    dispatch({
      type: types.FETCH_CLASSES,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createClass = (newClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newClass) formData.append(key, newClass[key]);
    const res = await instance.post(
      `/gyms/${newClass.gymId}/classes`,
      formData
    );
    dispatch({
      type: types.CREATE_CLASS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateClass = (updatedClass) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedClass) formData.append(key, updatedClass[key]);
    const res = await instance.put(`/classes/${updatedClass.id}`, formData);
    dispatch({
      type: types.UPDATE_CLASS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteClass = (classId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/classes/${classId}`);
      dispatch({
        type: types.DELETE_CLASS,
        payload: classId,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
