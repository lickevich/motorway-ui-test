import { useEffect, useState } from 'react';

const INITIAL_VALUES = {
  name: '',
  email: '',
  birthday: '',
  color: '#fe6d73',
  salary: '500',
};

const useForm = (params) => {
  const { validator, onSubmit, initialValues = INITIAL_VALUES } = params;

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validator(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    const isValid = Object.keys(errors).length === 0 && isSubmitting;

    if (isValid) {
      onSubmit();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export { useForm };
