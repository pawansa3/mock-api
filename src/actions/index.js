import axios from "axios";

const baseUrl = "https://reqres.in";

export function getUsersList(page_no = 1) {
  const request = axios
    .get(`${baseUrl}/api/users?page=${page_no}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "LIST_USERS",
    payload: request
  };
}

export function getUser(id) {
  const request = axios
    .get(`${baseUrl}/api/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "GET_USER",
    payload: request
  };
}

export function loadUser(id) {
  const request = axios
    .get(`${baseUrl}/api/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "LOAD",
    payload: request
  };
}

export function deleteUser(id) {
  const request = axios
    .delete(`${baseUrl}/api/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "USER_DEL",
    payload: request,
    status: true
  };
}

export function createUser(formdata) {
  const fd = formdata ? { name: formdata.name, job: formdata.job } : "";

  const request = axios
    .post(`${baseUrl}/api/user`, fd)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "CREATE_USER",
    payload: request
  };
}

export function updateUser(formdata, id) {
  const fd = formdata ? { name: formdata.name, job: formdata.job } : "";

  const request = axios
    .put(`${baseUrl}/api/user/${id}`, fd)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "UPDATE_USER",
    payload: request
  };
}
