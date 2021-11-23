import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

//reduxImmutableStateInvariant is a Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState = {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
