import { useContext } from "react";
import { CartContext } from "containers/store/context/cartContext";

const CartItem = ({ cartItem }) => {
  const { category, quantity } = cartItem;

  const { clearItemFromCart } = useContext(CartContext);
  const clearHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="cartitem">
      <p>{category}</p>
      <p>{quantity}</p>
      <button onClick={clearHandler}>clear</button>
    </div>
  );
};

export default CartItem;
