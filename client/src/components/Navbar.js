import logo from "../images/Sheep-logos.jpeg";

const Navbar = () => {
  //styles
  const styles = {
    imgStyle: {
      width: "8rem",
      height: "8rem",
      borderRadius: "30px",
    },
    mainContainerStyle: {
      height: "10vh",
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
      justifyContent: "space-around",
      alignItems: "flex-end",
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
        <button>Login</button>
        <button>Signup</button>
        <button>Myprofile</button>
      </div>
    </div>
  );
};

export default Navbar;
