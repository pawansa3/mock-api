export default function(state = {}, action) {
  switch (action.type) {
    case "LIST_USERS":
      return { ...state, users: action.payload };
    default:
      return { ...state };
  }
}
