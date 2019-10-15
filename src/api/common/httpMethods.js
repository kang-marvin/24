import URL from "./utils";

/** Retrieve authentication from saved state */

/**
 * You can extract the authorization token from Redux store
 *  (imported from configureStore) and
 * pass it as Authorization parameter for the Request header.
 *
 * Example :
 *  import configureStore from "../../redux/store/configureStore";
 *  const authorization = configureStore().getState().authorization.token;
 */

const headers = new Headers(
  {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  });

/** GET requests */
export async function get(url) {
  const response = await fetch(URL(url), {
    method: "GET",
    headers: headers
  });
  const data = await response.json();
  return {
    data: data,
    status: response.status
  };
}

/** POST requests */
export async function post(url, body) {
  const response = await fetch(URL(url), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });
  return {
    data: await response.json(),
    status: response.status
  };
}

/** DELETE requests */
export async function remove(url, body) {
  const response = await fetch(URL(url), {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(body)
  });
  return {
    data: await response.json(),
    status: response.status
  };
}