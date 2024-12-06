import React from 'react';
import { useFormik } from 'formik';
import { registerUser } from '../../utils/api';
import { registerSchema } from '../../utils/validationSchemas';

function Register() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const response = await registerUser(values);
        setStatus(`Registration successful! Token: ${response.data.token}`);
      } catch (error) {
        setStatus('Registration failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${formik.errors.email && 'is-invalid'}`}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className={`form-control ${formik.errors.password && 'is-invalid'}`}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Register</button>
        {formik.status && <div className="mt-3 alert alert-info">{formik.status}</div>}
      </form>
    </div>
  );
}

export default Register;
