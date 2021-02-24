//IMPORTS

import instance from "./instance";

// ACTION TYPES

import * as types from "./types";

//ACTIONS

//Create Gym

export const createGym = (newGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newGym) formData.append(key, newGym[key]);
      const res = await instance.post("/gyms/", formData);
      dispatch({
        type: types.CREATE_GYM,
        payload: { newGym: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Fetch Gyms

export const fetchGyms = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/gyms/");
      dispatch({
        type: types.FETCH_GYMS,
        payload: { gyms: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Gym Detail

export const detailGym = (gymId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/gyms/${gymId}`);
      dispatch({
        type: types.DETAIL_GYM,
        payload: { gym: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Update Gym

export const updateGym = (updatedGym) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedGym) formData.append(key, updatedGym[key]);
      const res = await instance.put(`/gyms/${updatedGym.id}`, formData);
      dispatch({
        type: types.UPDATE_GYM,
        payload: { updatedGym: res.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//Delete Gym

export const deleteGym = (gymId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/gyms/${gymId}`);
      dispatch({
        type: types.DELETE_GYM,
        payload: { gymId },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
