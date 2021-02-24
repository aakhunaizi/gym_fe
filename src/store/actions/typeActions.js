// IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

// ACTIONS

//Fetch Types

export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/types");
      dispatch({
        type: types.FETCH_TYPES,
        payload: { types: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Type Detail

export const detailType = (typeId, classId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/classes/${classId}/${typeId}`);
      dispatch({
        type: types.DETAIL_TYPE,
        payload: { type: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Create Type

export const createType = (newType) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newType) formData.append(key, newType[key]);
      const res = await instance.post(
        `/classes/${newType.classId}/types`,
        formData
      );
      dispatch({
        type: types.CREATE_TYPE,
        payload: { newType: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Update Type

export const updateType = (updatedType) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedType) formData.append(key, updatedType[key]);
      const res = await instance.put(`/types/${updatedType.id}`, formData);
      dispatch({
        type: types.UPDATE_TYPE,
        payload: { updatedType: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Delete Type

export const deleteType = (typeId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/types/${typeId}`);
      dispatch({
        type: types.DELETE_CLASS,
        payload: { typeId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
