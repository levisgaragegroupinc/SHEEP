import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import background from "../assets/virus-gab3ed1248_1920.jpg";

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
      justifyContent: "center",
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
    <div 
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={styles.mainContainerStyle}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Donate;
