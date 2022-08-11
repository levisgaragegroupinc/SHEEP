import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import background from "../assets/virus-gab3ed1248_1920.jpg";

import { QUERY_SINGLE_PROJECT } from "../utils/queries";

const SingleProject = () => {
  const styles = {
    mainContainerStyle: {
      minHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "center",
    },
    projectConatiner: {
      backgroundColor: "rgb(169,169,159, 0.8)",
      width: "70%",
      height: "70%",
      borderRadius: "2rem",
      padding: "1rem"
    },
    imgStyle: {
      width: "20%",
      borderRadius: ".5rem",
    },
    descriptionStyle: {
      width: "50%",
      height: "35%",
    },
    descriptionStyle: {
      fontSize: "18px",
      padding: "5px",
      margin: "",
      backgroundColor: "#429786",
      borderStyle: "double",
      borderRadius: ".5rem",
      margin: "1em 1em 1em",

    },
    nameStyle: {
      fontSize: "28px",
      fontWeight: "bolder",
      padding: "5px",
      margin: ".5em 4em 1em",
      backgroundColor: "#429786",
      borderStyle: "double",
      borderRadius: ".5rem",

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
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={styles.mainContainerStyle}>
        <div style={styles.projectConatiner}>
          <div>
            <h1 className="projectTitleMobile" style={styles.nameStyle}>{project.name}</h1>
          </div>
          <img
            className="imgMobile"
            style={styles.imgStyle}
            src={project.image}
          />
          <p className="singleDescription" style={styles.descriptionStyle}>
            {project.description}
          </p>
          <Link  to={`/donate/${project._id}`}>Donate</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
