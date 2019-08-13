export function getUsersList(page_no) {
  const request = axios
    .get(`https://reqres.in/api/users?page=${page_no || null}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: "LIST_USERS",
    payload: request
  };
}
