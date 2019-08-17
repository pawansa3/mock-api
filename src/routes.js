import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/app";
import ListUsers from "./components/list_users";
import SingleUser from "./components/single_user";
import CreateUser from "./components/create_user";
import UpdateUser from "./components/update_user";
import Header from "./components/header";

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/listusers/:pn" component={ListUsers} />
        <Route exact path="/user/:id" component={SingleUser} />
        <Route exact path="/add/user" component={CreateUser} />
        <Route exact path="/add/user/:id" component={UpdateUser} />
        <Route render={() => <div>Page Not Found !</div>} />
      </Switch>
    </div>
  );
};

export default Routes;
