import { combineReducers } from "redux";

import classReducer from "./classReducer";
import gymReducer from "./gymReducer";
import authReducer from "./authReducer";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
  gymReducer,
  classReducer,
  typeReducer,
  authReducer,
});

export default rootReducer;
