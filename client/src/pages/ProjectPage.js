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
      textAlign: "center"
    },
    imgStyle: {
      width: "20%",
    },
    descriptionStyle: {
      width: "50%",
      height: "35%"
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
      <div>
        <h1>{project.name}</h1>
      </div>
      <img className="imgMobile" style={styles.imgStyle} src={project.image} />
      <p className="singleDescription" style={styles.descriptionStyle}>{project.description}</p>
      <div>
        <Link to={`/donate/${project._id}`}>Donate</Link>
      </div>
    </div>
  );
};

export default SingleProject;
