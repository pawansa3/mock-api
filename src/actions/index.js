import axios from "axios";

export function getUsersList(page_no = 1) {
  const request = axios
    .get(`https://reqres.in/api/users?page=${page_no}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "LIST_USERS",
    payload: request
  };
}

export function getUser(id) {
  const request = axios
    .get(`https://reqres.in/api/users/${id}`)
    .then(res => res.data)
    .catch(err => null);

  return {
    type: "GET_USER",
    payload: request
  };
}

export function loadUser(id) {
  const request = axios
    .get(`https://reqres.in/api/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "LOAD",
    payload: request
  };
}

export async function deleteUser(id) {
  const request = await axios
    .delete(`https://reqres.in/api/users/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "USER_DEL",
    payload: request,
    status: true
  };
}

export async function createUser(formdata) {
  const fd = formdata ? { name: formdata.name, job: formdata.job } : "";

  const request = await axios
    .post("https://reqres.in/api/user", fd)
    .then(res => res.data)
    .catch(err => console.log(err.message));

  return {
    type: "CREATE_USER",
    payload: request
  };
}

export async function updateUser(formdata, id) {
  const fd = formdata ? { name: formdata.name, job: formdata.job } : "";

  const request = await axios
    .put("https://reqres.in/api/user/${id}", fd)
    .then(res => res.data)
    .catch(err => console.log(err.message));

  return;
}
