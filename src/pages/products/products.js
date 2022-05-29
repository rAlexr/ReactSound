import AmountButton from "components/amountbutton";
import SignUp from "components/signup";


const Products = () => {
    return(
        <div>
            <AmountButton link={"/products"} className={"orange"} price={20}/>
            <SignUp />
        </div>
    );
}

export default Products;