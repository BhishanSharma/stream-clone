import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import axios from 'axios';

const signupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Password is required"),
  avatar: Yup.mixed().required("Avatar is required"),
});

function Signup() {

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      console.log(storedUser);
      if (storedUser != null) {
        console.log(storedUser);
        navigate("/");
      }
    } catch {
    }
  }, []);

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

      const form = new FormData();
      form.append("fullname", formData.name);
      form.append("username", formData.name.toLowerCase());
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("avatar", formData.avatar);

      const res = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Save token or user details if needed
      console.log("Signup success:", res.data);

      // Optional: redirect to login or home
      navigate("/login");
    } catch (error) {
      if (error.name === "ValidationError") {
        const formErrors = {};
        error.inner.forEach((err) => {
          formErrors[err.path] = err.message;
        });
        setErrors(formErrors);
      } else if (error.response) {
        alert(error.response.data.message || "Signup failed");
      } else {
        console.error("Signup error:", error);
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
