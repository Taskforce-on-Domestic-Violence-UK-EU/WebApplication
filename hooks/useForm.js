import { useState } from "react";

// NOTE : Generate Blank Errors Object ...

const createErrors = (initialValues) => {
  let errors = {};
  for (var key in initialValues) {
    errors[key] = "";
  }
  return errors;
};

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(createErrors(initialValues));
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleDirectChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  // NOTE : Wrap handleErrors function in async, to await data fetches, such as verfiying user does not exist, etc ...
  const handleErrors = async (values, validation) => {
    const { errors, valid } = await validation(values);
    setErrors(errors);
    return valid;
  };

  return {
    values,
    step,
    errors,
    submitting,
    setStep,
    handleChange,
    handleDirectChange,
    handleErrors,
    setSubmitting,
  };
};
