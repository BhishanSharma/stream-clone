import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

function Login() {

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log(storedUser);
      if(storedUser != null){
        console.log(storedUser);
        navigate("/");
      }
    } catch {
    }
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const verifyDetails = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        'http://localhost:5000/api/v1/users/login',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      console.log('✅ Login successful:', response.data);
      console.log(JSON.parse(localStorage.getItem("user")));
      window.location.reload();
    } catch (validationError) {
      if (validationError.name === 'ValidationError') {
        const formErrors = {};
        validationError.inner.forEach((err) => {
          formErrors[err.path] = err.message;
        });
        setErrors(formErrors);
      } else {
        console.error('❌ Login error:', validationError);
        alert("Login failed! Check your credentials.");
      }
    }
  };


  const styles = {
    body: {
      minHeight: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '100%',
      maxWidth: '25vw',
    },
    header: {
      textAlign: 'center',
      fontSize: '36px',
      marginBottom: '30px',
      color: '#333',
      fontWeight: 200,
    },
    google: {
      width: '100%',
      display: 'flex',
      padding: '10px 0',
      textAlign: 'center',
      justifyContent: 'center',
      color: 'black',
      fontSize: '20px',
      fontWeight: '400',
      border: '1px solid black',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    span: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      color: 'black',
      margin: '20px 0',
      fontSize: '14px'
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
      border: '1px solid white',
      padding: '5px 5px',
      gap: '5px'
    },
    label: {
      margin: '0 4px',
      fontSize: '15px',
      color: 'black'
    },
    input: {
      padding: '5px 0px 3px 5px',
      borderRadius: '6px',
      fontSize: '18px',
      outline: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'black'
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginTop: '-8px',
      marginBottom: '4px',
    },
    button: {
      padding: '15px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '18px',
      margin: '16px 0',
      cursor: 'pointer',
    },
    link: {
      fontSize: '14px',
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#0073ff',
    },
    create: {
      fontSize: '14px',
      color: 'black',
      marginTop: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h3 style={styles.header}>Sign in to SZ</h3>
        <div style={styles.inputBox}>
          <div className="email" style={styles.field} onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid black")}
            onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid white")}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>
          <div className="password" style={styles.field} onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid black")}
            onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid white")}>
            <label htmlFor="password" style={styles.label}>PASSWORD</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </div>

          <input
            type="submit"
            value="Log in"
            onClick={verifyDetails}
            style={styles.button}
          />
        </div>
        <Link to="/signup" style={styles.link}>Reset password</Link>
        <span style={styles.create}>No account?<Link to="/signup" style={styles.link}>Create one</Link></span>
      </div>
    </div>
  );
}

export default Login;
