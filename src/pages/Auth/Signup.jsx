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
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '100%',
      maxWidth: '25vw',
      margin: '35px 0'
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
      alignItems: 'center',
      gap: '10px',
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
    },
    avatarWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    avatarLabel: {
      cursor: 'pointer',
      display: 'inline-block',
      borderRadius: '50%',
      overflow: 'hidden',
      width: '100px',
      height: '100px',
      border: '2px solid #ccc',
      transition: 'border 0.3s',
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h3 style={styles.header}>Sign up for SZ</h3>
        <div style={styles.google}>
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285f4" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M17.64 9.2q-.002-.956-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"></path><path fill="#34a853" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18"></path><path fill="#fbbc05" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042z"></path><path fill="#ea4335" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71"></path></svg>
          Continue with Google
        </div>
        <span style={styles.span}>or</span>
        <div style={styles.inputBox}>
          <div style={styles.avatarWrapper}>
            <input
              type="file"
              id="avatarInput"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="avatarInput" style={styles.avatarLabel}>
              <img
                src={
                  formData.avatar
                    ? URL.createObjectURL(formData.avatar)
                    : "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt="Avatar"
                style={styles.avatarImage}
              />
            </label>
            {errors.avatar && <p style={styles.error}>{errors.avatar}</p>}
          </div>

          <div className="name" style={styles.field} onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid black")}
            onMouseLeave={(e) => (e.currentTarget.style.border = "1px solid white")}>
            <label htmlFor="name" style={styles.label}>NAME</label>
            <input
              type='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>

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
            value="Sign Up"
            onClick={submitDetails}
            style={styles.button}
          />
        </div>
        <Link to="/signup" style={styles.link}>Reset password</Link>
        <span style={styles.create}>Already have an account?<Link to="/login" style={styles.link}>Log in</Link></span>      </div>
    </div>
  );
}

export default Signup;
