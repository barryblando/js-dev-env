import "./styles/index.scss";
// import { getUsers, deleteUser } from './api/userApi';
import Users from "./api/userApi";
import 'whatwg-fetch'; // Fixed babel runtime ReferenceError:

import Raven from "raven-js";
import { sentry_url } from "../config/raven.config";

Raven.config(sentry_url)
  .install()
  .addPlugin(require("raven-js/plugins/console"));

const users = new Users();

users.getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`;
  });
  global.document.getElementById("users").innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName("deleteUser");

  // Must use array.from to create a real array from a DOM collection
  // Array.from will take second argument which is map function
  // getElementsByClassName only returns an "array-ish" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      users.deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
