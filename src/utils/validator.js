const validator = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.birthday.trim()) {
    errors.birthday = 'Date of birth required';
  }

  return errors;
};

export { validator };
