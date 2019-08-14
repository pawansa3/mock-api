export default function(state = {}, action) {
  switch (action.type) {
    case "LIST_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "CREATE_USER":
      return { ...state, new_user: action.payload };
    case "LOAD":
      return { ...state, data: action.payload.data };
    case "USER_DEL":
      return { ...state, del_user: action.payload, status: action.status };
    default:
      return { ...state };
  }
}
