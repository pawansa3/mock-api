import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { loadUser, updateUser } from "../actions";

import validate from "./formValidation/validate";
import Form from "./formValidation/form";

class UpdateUser extends React.Component {
  state = {
    loading: true
  };
  componentWillMount() {
    this.props.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    }
    return <Form {...this.props} submitUser={updateUser} mode="edit" />;
  }
}

UpdateUser = reduxForm({
  form: "updateuserform",
  destroyOnUnmount: false,
  validate
})(UpdateUser);

UpdateUser = connect(
  state => ({
    initialValues: state.mock_reducers.data
  }),
  { load: loadUser }
)(UpdateUser);

export default UpdateUser;
