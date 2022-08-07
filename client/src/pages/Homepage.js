import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { QUERY_All_PROJECTS } from '../utils/queries';

const Homepage = () => {

  const { loading, data } = useQuery(QUERY_All_PROJECTS);

  const projects = data?.projects || [];


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
      margin: "1rem",
      border: ".1rem solid black",
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
     {projects && projects.map((project) => (
          <div key={project._id} style={styles.projectStyle}>
            <p>{project.name}</p>
            <p>{project.img}</p>
            <div style={styles.contributeContainerStyles}></div>
            <p>{project.description}</p>
            <Link to={`/projectPage/${project._id}`}>View Project</Link>
          </div>
        ))}
    </div>
  );
};

export default Homepage;