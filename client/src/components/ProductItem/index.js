import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {

  const styles = {
    productStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "1.8rem"
    }
  }
  const [state, dispatch] = useStoreContext();

  const { name, _id, price } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div style={styles.productStyle}>
      <Link to={`/products/${_id}`}>
        <p>{name}</p>
      </Link>
      <div>
        <span><strong>${price}</strong></span>
      </div>
      <button onClick={addToCart}>Add to Cart 🦠</button>
    </div>
  );
}

export default ProductItem;
