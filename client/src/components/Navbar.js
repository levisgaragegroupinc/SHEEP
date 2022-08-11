import logo from "../images/STOP-logos.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "../styles/links.css";

const Navbar = () => {
  function showProfile() {
    if (Auth.loggedIn()) {
      return (
        <Link to={"/profile"} style={styles.linksStyle}>
          Profile
        </Link>
      );
    }
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Link to="/" style={styles.linksStyle} onClick={() => Auth.logout()}>
          Logout
        </Link>
      );
    } else {
      return (
        <div style={styles.linksStyle}>
          <Link style={styles.linksStyle} to="/login">
            Login
          </Link>
          <Link style={styles.linksStyle} to="/signup">
            Signup
          </Link>
        </div>
      );
    }
  }
  const styles = {
    mainContainerStyle: {
      height: "15vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: ".2rem solid black",
      fontFamily: "Tiro Gurmukhi, serif",
      fontSize: "1.2rem",
    },
    imgContainerStyle: {
      height: "100%",
      width: "33%",
      display: "flex",
      alignItems: "center",
    },
    imgStyle: {
      width: "10rem",
      height: "5rem",
      borderRadius: "10px",
      margin: ".5rem",
    },
    titleContainerStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "33%",
    },
    linksContainerStyle: {
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "33%",
    },
    linksStyle: {
      margin: ".5rem",
      padding: "3px 9px",
      borderRadius: "6px",
      height: "30px",
    },
    loginStyle: {
      margin: ".5rem",
    },
  };
  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.imgContainerStyle}>
        <img
          style={styles.imgStyle}
          src={logo}
          alt="Virus Cell Molecule with STOP to the right"
        ></img>
      </div>
      <div style={styles.titleContainerStyle}>
        <h1>S.T.O.P.</h1>
        <h3>Support The Obliteration of Pandemics</h3>
      </div>
      <div style={styles.linksContainerStyle}>
        <Link to={"/"} style={styles.linksStyle}>
          Home
        </Link>
        {showProfile()}
        {showNavigation()}
      </div>
    </div>
  );
};

export default Navbar;
