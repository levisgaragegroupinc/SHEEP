import { Link } from "react-router-dom";

const Projects = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.mainContainerStyle}>
      <div>Project Title</div>
      <div>Project Image</div>
      <div>Project Decription</div>
      <div>
        <Link to="/Donate">Donate</Link>
      </div>
    </div>
  );
};

export default Projects;
