/**
 * Centralized API Calls (1 Spot)
 *
 * -Configure all calls
 * -Handle pre-loader logic
 * -Handle errors
 */

import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users'); // /users
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
