import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";

const setUser = (token) => {
  localStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    dispatch(setUser(res.data.token));
    history.replace("/");
  } catch (error) {
    console.error(error);
  }
};

export const signin = (user, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", user);
    dispatch(setUser(res.data.token));
    history.replace("/");
  } catch (error) {
    console.error(error);
  }
};

export const signout = (history) => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  history.replace("/");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("token");
      dispatch(signout());
    }
  }
};
