import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import background from "../assets/virus-gab3ed1248_1920.jpg";
import { Link } from "react-router-dom";

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
        console.log(data);
        const productData = data.addOrder.product;
        console.log("My product data:", productData);

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }
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
      color: "white",
    },
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
      }}
    >
      <div style={styles.mainContainerStyle}>
        <h1>Thank You for you donation!</h1>
        <h4>
          See your updated ameobas! - <Link to="/profile">My Profile</Link>
        </h4>
        <h4>
          <Link to="/">Go Back Home</Link>
        </h4>
      </div>
    </div>
  );
}

export default Success;
