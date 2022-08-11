import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import background from '../assets/virus-gab3ed1248_1920.jpg'


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
      fontSize: "18px",
      padding: "5px",
      margin: "80px",
      backgroundColor: "#429786",
      borderStyle: "double",
    },
    nameStyle: {
      fontSize: "28px",
      fontWeight: "bolder",
      padding: "5px",
      margin: "80px",
      backgroundColor: "#429786",
      borderStyle: "double",
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
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div style={styles.mainContainerStyle}>
        <div>
          <h1 style={styles.nameStyle}>{project.name}</h1>
        </div>
        <img className="imgMobile" style={styles.imgStyle} src={project.image} />
        <p className="singleDescription" style={styles.descriptionStyle}>{project.description}</p>
        <Link to={`/donate/${project._id}`}>Donate</Link>
      </div>
    </div>
  );
};

export default SingleProject;
