import { useContext } from "react";
import { AmountContext } from "containers/store/context/amountContext";
import { CartContext } from "containers/store/context/cartContext";

import Button from "components/button";
import CartItem from "components/cartitem";


const AmountButton = ({text= undefined ? "" : "add to cart", className="", price="", product}) => {
    const { cartItems } = useContext(CartContext);
    const { count, setCount } = useContext(AmountContext) 
    const total = count * price;

    const handleIncrement = () => {
        setCount(count + 1)
        addProductToCart()
    }

    const handleDecrement = () => {
        count === 0 ? setCount(count * 0) : setCount(count - 1);
        removeItemToCart(product[0])

    }

    const{ addItemToCart, removeItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product[0]);

    return(
        <div className="amountbutton-container">
            <CartItem cartItem={cartItems.length === 0 ? cartItems : cartItems[0]} />
            <p>{`${total === 0 ? price : total}$`}</p>
            <div className="amountbutton-container-buttons">
                <div className="amountbutton-container-buttons__amount">
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <Button link={""}  text={text} className={className} onClick={addProductToCart}/>
            </div>
        </div>
    );
}

export default AmountButton;