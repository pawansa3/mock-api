import React from "react";

const renderInput = ({ input, meta, label, Ctype, type }) => (
  <div className="form-group">
    <label className="control-label col-sm-2">{label}</label>
    <div className="col-sm-5">
      <Ctype {...input} className="form-control" type={type} />
    </div>
    <div className="col-sm-5">
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

export default renderInput;
