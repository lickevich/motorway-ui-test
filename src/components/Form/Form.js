import { useForm } from '../../hooks';
import { validator } from '../../utils';
import './Form.css';

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm({
    validator,
    onSubmit,
  });

  function onSubmit() {
    console.log(values);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
        />
        {errors?.name && <div className="form-error">{errors.name}</div>}
      </div>
      <div className="form-row">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors?.email && <div className="form-error">{errors.email}</div>}
      </div>
      <div className="form-row">
        <label className="form-label">Date of birth</label>
        <input
          className="form-input"
          type="date"
          name="birthday"
          value={values.birthday}
          onChange={handleChange}
        />
        {errors?.birthday && (
          <div className="form-error">{errors.birthday}</div>
        )}
      </div>
      <div className="form-row">
        <label className="form-label">Favorite color</label>
        <input
          className="form-input-color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label className="form-label">{`Salary (${values.salary}$)`}</label>
        <input
          className="form-input-range"
          type="range"
          name="salary"
          value={values.salary}
          min="1"
          max="1000"
          onChange={handleChange}
        />
      </div>
      <div className="form-submit">
        <button className="form-submit-btn" type="submit" value="">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
