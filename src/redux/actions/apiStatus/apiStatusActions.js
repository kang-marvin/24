import * as types from "../actionTypes";

import { statusApi } from "../../../api";

/** Redux Actions */

export const apiStatusSuccess = statusObject => {
  return { type: types.API_STATUS_SUCCESS, statusObject }
}

export const apiStatusFailure = _ => {
  return { type: types.API_STATUS_FAILURE }
}

/** API calls */

/**
 * Replace undescore (_) with params if the function takes in arguments.
 */

export const apiStatus = _ => (dispatch) => {
  return statusApi
    .getEndpointStatus()
    .then(response => {
      if (response.status === 200) {
        dispatch(apiStatusSuccess(response.data));
      } else {
        dispatch(apiStatusFailure());
      }
    })
    .catch(_error => {
      dispatch(apiStatusFailure());
    });
}
