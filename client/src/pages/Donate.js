import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_SINGLE_PROJECT  } from '../utils/queries';

const Donate = () => {
  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    projectContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
    donateContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { id: projectId},
  } );

  const project =data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={styles.mainContainerStyle}>
        <div style={styles.projectContainerStyle}>
          <h1>{project.name}</h1>
          <h1>{project.img}</h1>
        </div>
        <div style={styles.donateContainerStyle}>
            <p>How much would u like to contribute?</p>
            <div>render donation amounts</div>
            <div><button>Donate - goes to swipe payment page</button></div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
