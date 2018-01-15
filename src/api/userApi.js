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
  return get('users'); // get baseUrl/users
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  // demo api https://floating-basin-12302.herokuapp.com/users
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  // return response as json or response will return a ReadableStream
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
