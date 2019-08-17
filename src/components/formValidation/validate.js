const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "Required";
  }
  if (values.first_name && values.first_name.length < 3) {
    errors.first_name = "first name must be >= 3 character";
  }
  if (!values.last_name) {
    errors.last_name = "Required";
  }
  if (values.last_name && values.last_name.length < 3) {
    errors.last_name = "last name must be  >= 3 character";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (values.name && values.name.length < 3) {
    errors.name = "name must be >= 3 character";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.job) {
    errors.job = "Required";
  } else if (values.job && values.job.length < 3) {
    errors.job = "job must be >= 3 character";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "phone no must be a number";
  } else if (values.phone.length !== 10) {
    errors.phone = "phone no must be 10 digits.";
  }
  if (!values.address) {
    errors.address = "Required";
  } else if (values.address && values.address.length < 8) {
    errors.address = "address must be >= 8 character";
  }
  if (!values.pincode) {
    errors.pincode = "Required";
  } else if (isNaN(Number(values.pincode))) {
    errors.pincode = "pincode must be a number";
  }
  return errors;
};

export default validate;
