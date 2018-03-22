/**
 * Centralized API Calls (1 Spot)
 *
 * -Configure all calls
 * -Handle pre-loader logic
 * -Handle errors
 */

import getBaseUrl from './baseUrl';

class Users {
  constructor() {
    this.baseUrl = getBaseUrl();
  }

  getUsers() {
    return this.get('users'); // get baseUrl/users
  }

  deleteUser(id) {
    return this.del(`user/${id}`);
  }

  get(url) {
    // demo api https://floating-basin-12302.herokuapp.com/users
    return fetch(this.baseUrl + url, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(this.onSuccess, this.onError);
  }

  // Can't call func delete since reserved word.
  del(url) {
    const request = new Request(this.baseUrl + url, {
      method: 'DELETE'
    });

    return fetch(request).then(this.onSuccess, this.onError).then((messages) => console.log(`${messages}`)); // eslint-disable-line no-console
  }

  onSuccess(response) {
    // return response as json or response will return a ReadableStream
    return response.json();
  }

  onError(error) {
    console.log(error); // eslint-disable-line no-console
  }
}

export default Users;
