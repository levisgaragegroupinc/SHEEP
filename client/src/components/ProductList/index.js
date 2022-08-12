import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROJECT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { slotFlagsText } from "@vue/shared";

function ProductList() {
  const styles = {
    donateContainerStyle: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    donationOption: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
      <h2>Donation Options:</h2>
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
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;
