import logo from "../images/STOP-logos.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    mainContainerStyle: {
      height: "15vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    imgContainerStyle: {
      height: "100%",
      width: "33%",
      display: "flex",
      alignItems: "center"
    },
    imgStyle: {
      width: "10rem",
      height: "5rem",
      borderRadius: "10px",
      margin: ".5rem"
    },
    titleContainerStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width:"33%"
    },
    linksContainerStyle: {
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "33%"
    },
    linksStyle: {
      margin: ".5rem",
    },
    loginStyle: {
        margin: ".5rem",
    }
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
        <h1>STOP</h1>
        <h3>Support The Obliteration of Pandemics</h3>
      </div>
      <div style={styles.linksContainerStyle}>
        <h3 style={styles.loginStyle}>Login</h3>
        <h3 style={styles.loginStyle}>Signup</h3>
        <Link to={"/"} style={styles.linksStyle}>Home</Link>
        <Link to={"/profile"} style={styles.linksStyle}>Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
