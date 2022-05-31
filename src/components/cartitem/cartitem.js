

const CartItem = ({cartItem}) => {
    const{ category, quantity } = cartItem;
    return(
        <div className="cartitem">
            <p>{category}</p>
            <p>{quantity}</p>
        </div>
    );
}

export default CartItem;