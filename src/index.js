import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import Routes from "./routes";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
