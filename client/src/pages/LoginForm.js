import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/buttons.css";
import background from '../assets/virus-gab3ed1248_1920.jpg'

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          <h1>Login</h1>
          <form onSubmit={handleFormSubmit} style={styles.formStyle}>
            <div className="inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="email" style={styles.labelStyle}>
                Email address:
              </label>
              <input style={styles.inputStyle}
                placeholder="mail@email.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="inputMobile" style={styles.formInputContainerStyle}>
              <label htmlFor="pwd" style={styles.labelStyle}>
                Password:
              </label>
              <input style={styles.inputStyle}
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div style={styles.formInputContainerStyle}>
                <p>The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div style={styles.formInputContainerStyle}>
              <button type="submit">Submit</button>
            </div>
          </form>
          <Link to="/signup">Don't have any account yet? Signup here!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
