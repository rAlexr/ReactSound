import AmountButton from "components/additemstocart";

import data from 'shared/json/xx99-mark-one.json';

const HeadphonesXX99 = () => {
 const { price } = data[0];

  return (
    <div>
        <AmountButton text={"add to cart"} className={"orange"} price={price} product={data}/>
    </div>
  );
};

export default HeadphonesXX99;
