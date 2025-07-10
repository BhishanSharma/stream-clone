import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const verifyDetails = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      console.log("Login successful!", formData);
      // proceed with login logic here
    } catch (validationError) {
      const formErrors = {};
      validationError.inner.forEach((err) => {
        formErrors[err.path] = err.message;
      });
      setErrors(formErrors);
    }
  };

  const styles = {
    body: {
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      backgroundColor: '#fff',
      padding: '32px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    input: {
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '14px',
      outline: 'none',
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '-8px',
      marginBottom: '4px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#0073ff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '15px',
      marginTop: '16px',
      cursor: 'pointer',
    },
    link: {
      marginTop: '16px',
      display: 'block',
      textAlign: 'center',
      fontSize: '14px',
      textDecoration: 'none',
      color: '#0073ff',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h3 style={styles.header}>SZ</h3>
        <div style={styles.inputBox}>
          <input
            type='email'
            name='email'
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            type='password'
            name='password'
            placeholder='Enter password'
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <input
            type="submit"
            value="Login"
            onClick={verifyDetails}
            style={styles.button}
          />
        </div>

        <Link to="/signup" style={styles.link}>Create a new account?</Link>
      </div>
    </div>
  );
}

export default Login;
