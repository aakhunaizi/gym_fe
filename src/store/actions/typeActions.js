import instance from "./instance";
import * as types from "./types";

export const fetchTypes = () => async (dispatch) => {
  try {
    const res = await instance.get("/types");
    dispatch({
      type: types.FETCH_TYPES,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createType = (newType) => async (dispatch) => {
  try {
    const res = await instance.post("/types", newType);
    dispatch({
      type: types.CREATE_TYPE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateType = (updatedType) => async (dispatch) => {
  try {
    const res = await instance.put(`/types/${updatedType.id}`, updatedType);
    dispatch({
      type: types.UPDATE_TYPE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteType = (typeId) => async (dispatch) => {
  try {
    await instance.delete(`/types/${typeId}`);
    dispatch({
      type: types.DELETE_CLASS,
      payload: typeId,
    });
  } catch (error) {
    console.error(error);
  }
};
