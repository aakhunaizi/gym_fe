import * as types from "../actions/types";

const initialState = {
  gyms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GYMS:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };

    case types.CREATE_GYM:
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
      };

    case types.DELETE_GYM:
      return {
        ...state,
        gyms: state.gyms.filter((gym) => gym.id !== action.payload.gymId),
      };
    case types.UPDATE_GYM:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        gyms: state.gyms.map((gym) =>
          gym.id === updatedProduct.id ? updatedProduct : gym
        ),
      };
    default:
      return state;
  }
};

export default reducer;
