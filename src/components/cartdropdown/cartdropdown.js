import CartItem from "components/cartitem";

import { useContext } from "react";
import { CartContext } from "containers/store/context/cartContext";


const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cartdropdown">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <button>CHeckout</button>
    </div>
  );
};

export default CartDropDown;
