import { combineReducers } from "redux";
// API Status Reducer
import apiStatus from "./apiStatusReducer";

const rootReducer = combineReducers({
  apiStatus
});

export default rootReducer;
