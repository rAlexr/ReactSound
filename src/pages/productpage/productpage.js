// import { CategoryImage } from "components/categorytab/categorytab.style";

import mobile from "shared/img/headphones-xx99-mark-two/mobile/image-product.jpg";
import tablet from "shared/img/headphones-xx99-mark-two/tablet/image-product.jpg";
import laptop from "shared/img/headphones-xx99-mark-two/desktop/image-product.jpg";
import AddItemsToCart from "components/additemstocart";

import ProductTab from "components/producttab";
import {
  ProductAmountWraper,
  ProductItemsWraper,
  ProductPadding,
} from "./productpage.styled";
import FeatureText from "components/featuretext";
import ProductImages from "components/productimages";
import { useParams } from "react-router-dom";
import { getData } from "shared/js";
import { useEffect, useState } from "react";


const ProductPage = () => {
  const [mydata, setmyData] = useState({});
  // const [iamges, setImages ] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    getData(params.id).then((res) => setmyData(res.data));
    // getData(params.id).then((res) => setImages(res.data[0].categoryImage.mobile));  
  }, []);

  console.log(mydata?.categoryImage?.mobile);

  const myImage = mydata;

  return (
    <ProductItemsWraper>
      <ProductPadding>
        {/* { <CategoryImage img={myImage.mobile} tablet={myImage.tablet} laptop={myImage.desktop} product /> } */}
        <ProductAmountWraper>
          <ProductTab
            // promo={promo}
            // productTitle={productTitle}
            // info={info}
            // link={link}
          />
          {/* <AddItemsToCart price={price} product={data} onClick={onClick} /> */}
        </ProductAmountWraper>
      </ProductPadding>
      <FeatureText
        title={ mydata.category }
        // firstparagraph={firstpara}
        // secondparagraph={secondpara}
        // titlebox={boxtitle}
        // piece1={piece1}
        // item1={item1}
        // piece2={piece2}
        // item2={item2}
        // piece3={piece3}
        // item3={item3}
        // piece4={piece4}
        // item4={item4}
      />
      <ProductImages />
    </ProductItemsWraper>
  );
};

export default ProductPage;
