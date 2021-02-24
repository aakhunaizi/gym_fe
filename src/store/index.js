import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchGyms } from "./actions/gymActions";
import { fetchClasses } from "./actions/classActions";
import { fetchTypes } from "./actions/typeActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGyms());
store.dispatch(fetchClasses());
store.dispatch(fetchTypes());
store.dispatch(checkForToken());

export default store;
