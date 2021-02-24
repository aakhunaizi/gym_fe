import * as types from "../actions/types";

const initialState = {
  types: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TYPES:
      return {
        ...state,
        types: action.payload,
        loading: false,
      };

    case types.CREATE_TYPE:
      return {
        ...state,
        types: [...state.types, action.payload],
      };

    case types.UPDATE_TYPE:
      const updatedType = action.payload;
      return {
        ...state,
        types: state.types.map((type) =>
          type.id === updatedType.id ? updatedType : type
        ),
      };

    case types.DELETE_TYPE:
      return {
        ...state,
        types: state.types.filter((type) => type.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
