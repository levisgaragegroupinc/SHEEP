import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROJECT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useParams } from "react-router-dom";

function ProductList() {
  const styles = {
    donateContainerStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "rgb(169,169,159, 0.8)",
      width: "auto",
      height: "auto",
      borderRadius: "2rem",
      padding: "1rem",
    },
    nameStyle: {
      fontSize: "2rem",
      fontWeight: "bolder",
      padding: ".5rem",
      margin: ".5em 4em 1em",
      backgroundColor: "#429786",
      borderStyle: "double",
      borderRadius: ".5rem",
    },
  };

  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { projectId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { id: projectId },
  });

  const project = data?.project || {};

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: project.product,
      });
      project.product.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div style={styles.donateContainerStyle}>
      <h2 style={styles.nameStyle}>Donation Options:</h2>
      {state.products.length ? (
        <div style={styles.donationOption}>
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any projects yet!</h3>
      )}
    </div>
  );
}

export default ProductList;
