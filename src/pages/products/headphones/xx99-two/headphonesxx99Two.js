import AmountButton from "components/amountbutton";
import ProductCard from "components/productcard";

import data from 'shared/json/xx99-mark-two.json';

const HeadphonesXX99Two = () => {
 const { price } = data[0];

  return (
    <div>
        {
          data.map((data) => (
            <ProductCard key={data.id} product={data} />
          )) 
        }
        <AmountButton text={"add to cart"} className={"orange"} price={price} product={data}/>
      
    </div>
  );
};

export default HeadphonesXX99Two;
