import { combineReducers } from "redux";

import authReducer from "./authReducer";
import userReducer from "./userReducer";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";
import typeReducer from "./typeReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  gymReducer,
  classReducer,
  typeReducer,
});

export default rootReducer;
