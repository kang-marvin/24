import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import rootReducer from "../reducers";

/**
 * Docs for Redux devtools is
 *  [here](https://github.com/zalmoxisus/redux-devtools-extension#usage)
 */

const configureState = initialState => {
  const middleWares =
    process.env.NODE_ENV !== "production"
      ? [logger, reduxImmutableStateInvariant(), thunk]
      : [thunk]


  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleWares)
    )
  );
}

export default configureState;