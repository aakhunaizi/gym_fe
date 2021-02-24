// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

//Fetch Classes

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/classes/");
      dispatch({
        type: types.FETCH_CLASSES,
        payload: { classes: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Class Detail

export const detailClass = (gymId, classId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/gyms/${gymId}/${classId}`);
      dispatch({
        type: types.DETAIL_CLASS,
        payload: { class: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Create Class

export const createClass = (newClass) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newClass) formData.append(key, newClass[key]);
      const res = await instance.post(
        `/gyms/${newClass.gymId}/classes`,
        formData
      );
      dispatch({
        type: types.CREATE_CLASS,
        payload: { newClass: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Update Class

export const updateClass = (updatedClass) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedClass) formData.append(key, updatedClass[key]);
      const res = await instance.put(`/classes/${updatedClass.id}`, formData);
      dispatch({
        type: types.UPDATE_CLASS,
        payload: { updatedClass: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Delete Class

export const deleteClass = (classId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/classes/${classId}`);
      dispatch({
        type: types.DELETE_CLASS,
        payload: { classId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
