import { Link } from "react-router-dom";

const Homepage = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      flexWrap: "wrap"

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
      <div style={styles.projectStyle}>
        <p>Cool Project</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
      <div style={styles.projectStyle}>
        <p>Cool Project 2</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
      <div style={styles.projectStyle}>
        <p>Cool Project 3</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
      <div style={styles.projectStyle}>
        <p>Cool Project 4</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
      <div style={styles.projectStyle}>
        <p>Cool Project 5</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
      <div style={styles.projectStyle}>
        <p>Cool Project 6</p>
        <p>Img</p>
        <div style={styles.contributeContainerStyles}>
          <p>$ Contributed:</p>
          <p># Contributers:</p>
        </div>
        <Link to="/cancer">View Project</Link>
      </div>
    </div>
  );
};

export default Homepage;
