import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const signupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Password is required"),
  avatar: Yup.mixed().required("Avatar is required"),
});

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "avatar" ? files[0] : value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const submitDetails = async () => {
    try {
      await signupSchema.validate(formData, { abortEarly: false });
      console.log("Signup successful!", formData);
      // proceed with API call
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
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
            type='file'
            name='avatar'
            onChange={handleChange}
            style={styles.input}
          />
          {errors.avatar && <p style={styles.error}>{errors.avatar}</p>}

          <input
            type='text'
            name='name'
            placeholder='Enter name'
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

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
            value="Sign Up"
            onClick={submitDetails}
            style={styles.button}
          />
        </div>
        <Link to="/login" style={styles.link}>Already have an account?</Link>
      </div>
    </div>
  );
}

export default Signup;
