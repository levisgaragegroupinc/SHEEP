import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);
      console.log(products);

      if (products.length) {
        const { data } = await addOrder({
          variables: { product: products },
        });
        // console.log(data);
        // const productData = data.addOrder.product;
        // console.log("My product data:", productData);

        // products.forEach((item) => {
        //   idbPromise("cart", "delete", item);
        // });
      }

      //   setTimeout(() => {
      //     window.location.assign("/");
      //   }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  const styles = {
    mainContainerStyle: {
      height: "85vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.mainContainerStyle}>
      <h1>Thank You for you donation!</h1>
      <p>ameobas earned (link to profile)</p>
      <p>link to home page</p>
    </div>
  );
}

export default Success;
