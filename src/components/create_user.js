import React from "react";
import { reduxForm, Field } from "redux-form";
import { createUser } from "../actions";

const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (values.first_name && values.first_name.length < 3) {
    errors.first_name = "first name must be 3 char";
  }
  if (!values.last_name) {
    errors.last_name = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.job) {
    errors.job = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.pincode) {
    errors.pincode = "Required";
  }
  return errors;
};

const renderInput = ({ input, meta, label, Ctype, type }) => (
  <div className="form-group">
    <label className="control-label col-sm-2">{label}</label>
    <div className="col-sm-5">
      <Ctype {...input} className="form-control" type={type} />
    </div>
    <div className="col-md-5">
      {meta.error && meta.touched && (
        <div
          className="alert alert-danger"
          style={{ margin: "0px", padding: "5px 10px" }}
        >
          {meta.error}
        </div>
      )}
    </div>
  </div>
);

class CreateUser extends React.Component {
  render() {
    let {
      handleSubmit,
      submitting,
      pristine,
      reset,
      submitSucceeded
    } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit(createUser)}>
        {submitSucceeded ? (
          <div className="alert alert-success">User Created successfully!</div>
        ) : null}
        <Field
          name="first_name"
          component={renderInput}
          label="First Name"
          Ctype="input"
          type="text"
        />
        <Field
          name="last_name"
          component={renderInput}
          label="Last Name"
          Ctype="input"
          type="text"
        />
        <Field
          name="name"
          component={renderInput}
          label="User Name"
          Ctype="input"
          type="text"
        />
        <Field
          name="job"
          component={renderInput}
          label="Job"
          Ctype="input"
          type="text"
        />
        <Field
          name="email"
          component={renderInput}
          label="Email"
          Ctype="input"
          type="email"
        />
        <Field
          name="phone"
          component={renderInput}
          label="Phone"
          Ctype="input"
          type="number"
        />
        <Field
          name="address"
          component={renderInput}
          label="Address"
          Ctype="textarea"
          type=""
        />
        <Field
          name="pincode"
          component={renderInput}
          label="Pincode"
          Ctype="input"
          type="number"
        />
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
            >
              Submit
            </button>{" "}
            <button
              type="button"
              className="btn btn-default"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

CreateUser = reduxForm({
  form: "createuserform",
  destroyOnUnmount: false,
  validate
})(CreateUser);

export default CreateUser;
