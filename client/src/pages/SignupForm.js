import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import "../styles/buttons.css";
import background from '../assets/virus-gab3ed1248_1920.jpg'

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
      backgroundColor: "rgb(169,169,159, 0.9)",
      border: ".1rem solid black",
      height: "60%",
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
    inputStyle: {
      borderRadius: ".5rem",
      height: "30px",
      fontSize: "20px",
    },
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={styles.mainContainerStyle}>
        <div className="formMobile" style={styles.formContainerStyle}>

          <h1>Signup</h1>
          <form onSubmit={handleFormSubmit}>
            <div className= "inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="firstName" style={styles.labelStyle}>First Name:</label>
              <input style={styles.inputStyle}
                placeholder=" First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className= "inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="lastName" style={styles.labelStyle}>Last Name:</label>
              <input style={styles.inputStyle}
                placeholder=" Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div  className= "inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="email" style={styles.labelStyle}>Email:</label>
              <input style={styles.inputStyle}
                placeholder=" mail@email.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className= "inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="pwd" style={styles.labelStyle}>Password:</label>
              <input style={styles.inputStyle}
                placeholder=" ******"
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
    </div>
  );
}

export default Signup;
