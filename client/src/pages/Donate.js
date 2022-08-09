import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import { QUERY_CHECKOUT } from "../utils/queries";


const stripePromise = loadStripe(
  "pk_test_51LTrSVC8TMpvZpf0sedUXRS4PClo9Ep07xAHUs9jOdhaFLtPAudN632XcO7dTV07DEItOh8uzuYsCq5BSkFJ9h6D00VYZLSbfZ"
);

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
    variables: { id: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(project);

  return (
    <div>
      <div style={styles.mainContainerStyle}>
        <div style={styles.projectContainerStyle}>
          <h1>{project.name}</h1>
          <h1>{project.img}</h1>
        </div>
        <div style={styles.donateContainerStyle}>
          <p>How much would u like to contribute?</p>
          {project.product.map((project) => (
            <div key={project._id} style={styles.projectStyle}>
              <button>{project.name} {project.price}</button>
            </div>
          ))}
          <div>
            <button>Continue to payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
