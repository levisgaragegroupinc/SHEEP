import { Link } from "react-router-dom";

const Homepage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    projectStyle: {
      height: "25%",
      width: "25%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    contributeContainerStyles: {
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.projectStyle}>
        <p>Cool Project</p>
        <p>Img</p>
        <Link to="/donate">Donate</Link>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
