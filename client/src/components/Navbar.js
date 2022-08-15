import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import "../styles/links.css";
import "../styles/headers.css";

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
      textAlign: "center",
      backgroundColor: "#a9a99f"
    },
    imgContainerStyle: {
      height: "100%",
      width: "33%",
      display: "flex",
      alignItems: "center",
    },
    imgStyle: {
      width: "16rem",
      height: "5rem",
      borderRadius: "10px",
    },
    titleContainerStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "33%",
      color: "#f7e109"
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
      fontSize: "16px",
      textTransform: "uppercase",
      fontWeight: "500",
    },
    loginStyle: {
      margin: ".5rem",
    },
    header3: {
      fontSize: "18px",
      textAlign: "center",
    },
  };
  return (
    <div className="navMobile" style={styles.mainContainerStyle}>
      <div className= "navlinkMobile" style={styles.imgContainerStyle}>
      </div>
      <div className= "navlinkMobile" style={styles.titleContainerStyle}>
      <img
          style={styles.imgStyle}
          src={logo}
          alt="Virus Cell Molecule with STOP to the right"
        ></img>
        <p className="titleDesMobile">Support The Obliteration of Pandemics</p>
      </div>
      <div className= "navlinkMobile" style={styles.linksContainerStyle}>
        <Link to={"/"} style={styles.linksStyle}>
          Home
        </Link>
        {showProfile()}
        {showNavigation()}
      </div>
      {/* <img src={virusOne} className="navVirus"></img>  */}
        {/* <img src={virusTwo}></img>
        <img src={virusThree}></img>
        <img src={virusFour}></img> */}
    </div>
  );
};

export default Navbar;
