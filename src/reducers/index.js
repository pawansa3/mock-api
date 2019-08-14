import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import mock_reducers from "./mock_reducers";

const rootReducer = combineReducers({
  mock_reducers,
  form: formReducer
});

export default rootReducer;
