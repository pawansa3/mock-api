import React from "react";
import { reduxForm } from "redux-form";
import { createUser } from "../actions";

import validate from "./formValidation/validate";
import Form from "./formValidation/form";

class CreateUser extends React.Component {
  render() {
    return <Form {...this.props} submitUser={createUser} mode="add" />;
  }
}

CreateUser = reduxForm({
  form: "createuserform",
  destroyOnUnmount: false,
  validate
})(CreateUser);

export default CreateUser;
