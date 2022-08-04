import logo from "../images/Sheep-logos.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    imgStyle: {
      width: "7rem",
      height: "7rem",
      borderRadius: "50px",
    },
    mainContainerStyle: {
      height: "15vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleContainerStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainerStyle: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      marginRight: ".5rem"
    },
  };
  return (
    <div style={styles.mainContainerStyle}>
      <div>
        <img
          style={styles.imgStyle}
          src={logo}
          alt="Virus Cell Molecule with SHEEP to the right"
        ></img>
      </div>
      <div style={styles.titleContainerStyle}>
        <h1>SHEEP</h1>
        <h3>Support Helping End and Eradicate Pandemics</h3>
      </div>
      <div style={styles.buttonContainerStyle}>
        <h3>Login</h3>
        <h3>Signup</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
