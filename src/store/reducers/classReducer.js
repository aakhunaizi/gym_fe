import * as types from "../actions/types";

const initialState = {
  classes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload,
        loading: false,
      };

    case types.CREATE_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };

    case types.UPDATE_CLASS:
      const updatedClass = action.payload;
      return {
        ...state,
        classes: state.classes.map((_class) =>
          _class.id === updatedClass.id ? updatedClass : _class
        ),
      };

    case types.DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter((_class) => _class.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
