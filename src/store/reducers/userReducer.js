import * as types from "../actions/types";

const initialState = {
  users: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case types.UPDATE_USER:
      const updatedUser = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        ),
      };

    case types.DELETE_BOOKING:
      const userUpdate = action.payload;
      const newUser = state.users
        .find((user) => user.id === userUpdate.id)
        .classes.filter((cl) => cl.id !== userUpdate.class);
      const usersList = state.users.filter((user) => user.id !== userUpdate.id);
      return {
        ...state,
        users: [...usersList, newUser],
      };

    default:
      return state;
  }
};

export default reducer;
