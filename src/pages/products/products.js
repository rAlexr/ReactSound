import AmountButton from "components/amountbutton";


const Products = () => {
    return(
        <div>
            <AmountButton link={"/products"} className={"orange"} price={20}/>
        </div>
    );
}

export default Products;