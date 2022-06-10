import { useContext } from "react";
import { AmountContext } from "containers/store/context/amountContext";
import { CartContext } from "containers/store/context/cartContext";

import Button from "components/button";
import {
  AmountButtons,
  ButtonsContainer,
  DisplayTotal,
  AmountButton,
  CountSpan,
} from "./additemstocart.style";

const AddItemsToCart = ({
  text = undefined ? "" : "add to cart",
  price = "",
  product,
  onClick
}) => {
  const { count, setCount } = useContext(AmountContext);
  const total = count * price;

  const handleClick = () => {
    if(typeof onClick === 'function') {
      onClick();
    }
  }

  const handleIncrement = () => {
    setCount(count + 1);
    addProductToCart();
  };

  const handleDecrement = () => {
    count === 0 ? setCount(count * 0) : setCount(count - 1);
    removeItemToCart(product[0]);
  };

  const { addItemToCart, removeItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product[0]);

  return (
    <>
      <DisplayTotal>{`${total === 0 ? price : total} $`}</DisplayTotal>
      <ButtonsContainer>
        <AmountButtons>
          <AmountButton
            color={"orange"}
            width={"count"}
            onClick={handleDecrement}
          >
            -
          </AmountButton>
          <CountSpan>{count}</CountSpan>
          <AmountButton width={"count"} onClick={handleIncrement}>
            +
          </AmountButton>
        </AmountButtons>

        <Button color={"orange"} text={text} onClick={handleClick} />
      </ButtonsContainer>
    </>
  );
};

export default AddItemsToCart;
