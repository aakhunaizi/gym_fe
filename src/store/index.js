import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchUsers } from "./actions/userActions";
import { fetchGyms } from "./actions/gymActions";
import { fetchClasses } from "./actions/classActions";
import { fetchTypes } from "./actions/typeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchUsers());
store.dispatch(fetchGyms());
store.dispatch(fetchClasses());
store.dispatch(fetchTypes());

export default store;
