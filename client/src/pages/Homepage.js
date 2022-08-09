import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";


import { QUERY_All_PROJECTS } from '../utils/queries';

const Homepage = () => {

  const { loading, data } = useQuery(QUERY_All_PROJECTS);

  const projects = data?.projects || [];

  function viewProject(project) {
    if (Auth.loggedIn()) {
      return (
        <Link to={`/projectPage/${project._id}`}>View Project</Link>
      );
    } else {
      return (
        <Link to="/login">Login to View Project</Link>
      )
    }
  }
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    projectStyle: {
      height: "40%",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "1rem",
      border: ".1rem solid black",
      borderRadius: ".3rem"
    },
    contributeContainerStyles: {
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    imageStyle: {
      marginTop: "1.2rem",
      width: "35%",
      height: "50%",
      borderRadius: ".5rem"
    }
  };
  return (
    <div style={styles.mainContainerStyle}>
     {projects && projects.map((project) => (
          <div key={project._id} style={styles.projectStyle}>
            <h2>{project.name}</h2>
            <img style= {styles.imageStyle} src={project.image}/>
            <div style={styles.contributeContainerStyles}></div>
            <p className="projectDescription">{project.description}</p>
            {viewProject(project)}
          </div>
        ))}
    </div>
  );
};

export default Homepage;