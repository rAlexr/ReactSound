import AmountButton from "components/amountbutton";
import ProductCard from "components/productcard";
import { getCategorysAndDocuments } from "containers/store/firebase/firebase";
import { useEffect } from "react";

import data from "shared/json/xx99-mark-two.json";


const HeadphonesXX99Two = () => {
  const { price } = data[0];
  

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategorysAndDocuments();
      console.log(categories);
    }

    getCategories();
  }, []);

  return (
    <div>
      {data.map((data) => (
        <ProductCard key={data.id} product={data} />
      ))}
      <AmountButton
        text={"add to cart"}
        className={"orange"}
        price={price}
        product={data}
      />
    </div>
  );
};

export default HeadphonesXX99Two;
