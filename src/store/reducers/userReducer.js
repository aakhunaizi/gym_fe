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
        classes: state.classes.map((_class) =>
          _class.id === updatedUser.id ? updatedUser : _class
        ),
      };

    default:
      return state;
  }
};

export default reducer;
