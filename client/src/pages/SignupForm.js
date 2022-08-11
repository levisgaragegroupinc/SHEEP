import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import "../styles/buttons.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formContainerStyle: {
      backgroundColor: "#E6E6FA",
      border: ".1rem solid black",
      height: "50%",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: ".5rem",
    },
    formInputContainerStyle: {
      margin: "1.2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.3rem",
    },
    labelStyle: {
      marginRight: ".3rem",
    },
    btnStyle: {
      margin: ".5rem",
      padding: "3px 9px",
      borderRadius: "6px",
      fontSize: "16px",
      textTransform: "uppercase",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.formContainerStyle}>

        <h1>Signup</h1>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.formInputContainerStyle}>
            <label htmlFor="firstName" style={styles.labelStyle}>First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div style={styles.formInputContainerStyle}>
            <label htmlFor="lastName" style={styles.labelStyle}>Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div style={styles.formInputContainerStyle}>
            <label htmlFor="email" style={styles.labelStyle}>Email:</label>
            <input
              placeholder="mail@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div style={styles.formInputContainerStyle}>
            <label htmlFor="pwd" style={styles.labelStyle}>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div style={styles.formInputContainerStyle}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <Link to="/login">Already have an account? Login here!</Link>
      </div>
    </div>
  );
}

export default Signup;
