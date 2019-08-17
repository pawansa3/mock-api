import React, { Component } from "react";
import { Field } from "redux-form";
import renderInput from "./renderInput";

class Form extends Component {
  render() {
    let {
      handleSubmit,
      submitting,
      pristine,
      reset,
      submitSucceeded,
      submitUser,
      mode
    } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit(submitUser)}>
        {submitSucceeded ? (
          <div className="alert alert-success">
            User {mode === "edit" ? "Updated" : "Created"} successfully!
          </div>
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

export default Form;
