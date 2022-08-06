import { Link } from "react-router-dom";

const Homepage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    projectStyle: {
      height: "30%",
      width: "30%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "10px",
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
      {/* // to do map through db and render out projects. have link change depending on project id cliked on */}
      <div style={styles.projectStyle}>
        <p>Cool Project</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/projectPage">View Project</Link>
      </div>
    </div>
  );
};

export default Homepage;
