import Button from "components/button";
import { useState } from "react";

const AmountButton = ({link, text= undefined ? "" : "add to cart", className="", price="" }) => {
    const [ count, setCount ] = useState(1);
    const total = count * price;

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => count === 0 ? setCount(count * 0) : setCount(count - 1);

    return(
        <div className="amountbutton-container">
            <p>{`${total === 0 ? price : total}$`}</p>
            <div className="amountbutton-container-buttons">
                <div className="amountbutton-container-buttons__amount">
                    <button onClick={handleDecrement}>-</button>
                    <span>{count}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <Button link={link} text={text} className={className}/>
            </div>
        </div>
    );
}

export default AmountButton;