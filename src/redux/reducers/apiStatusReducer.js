import * as types from "../actions/actionTypes";
import { initialState } from "../../data/initialState";

const initialAPIStatusState = initialState.apiStatus;

const apiStatusRedcuer = (state = initialAPIStatusState, action) => {
  switch (action.type) {
    case types.API_STATUS_SUCCESS:
      return Object.assign({}, state, {
        message: "API endpoint is up"
      });

    case types.API_STATUS_FAILURE:
      return Object.assign({}, state, {
        message: "API endpoint is down"
      });

    default:
      return state;
  }
}

export default  apiStatusRedcuer;