import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { QUERY_SINGLE_PROJECT } from "../utils/queries";

const SingleProject = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    descriptionStyle: {
      fontSize: "20px",
      margin: "80px",
    },
    nameStyle: {
      fontSize: "30px",
      fontWeight: "bolder",
      margin: "50px",
    },
  };

  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { id: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.nameStyle}>{project.name}</div>
      <img src={project.image} />
      <div style={styles.descriptionStyle}>{project.description}</div>
      <div>
        <Link to={`/donate/${project._id}`}>Donate</Link>
      </div>
    </div>
  );
};

export default SingleProject;
