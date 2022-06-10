import { CategoryImage } from "components/categorytab/categorytab.style";

import mobile from "shared/img/headphones-xx99-mark-two/mobile/image-product.jpg";
import tablet from "shared/img/headphones-xx99-mark-two/tablet/image-product.jpg";
import laptop from "shared/img/headphones-xx99-mark-two/desktop/image-product.jpg";

import AddItemsToCart from "components/additemstocart";

import data from "shared/json/xx99-mark-one.json";
import ProductTab from "components/producttab";
import {
  ProductAmountWraper,
  ProductItemsWraper,
  ProductPadding,
} from "./productpage.styled";
import FeatureText from "components/featuretext";
import ProductImages from "components/productimages";
import { useEffect } from "react";

const { price } = data[0];

const ProductPage = (props) => {
  const {
    mobile,
    tablet,
    laptop,
    promo = "",
    productTitle = "",
    info = "",
    link = "",
    data,
    onClick,
    price = "",
    featuretext = "",
    firstpara = "",
    secondpara = "",
    boxtitle = "",
    piece1 = "",
    item1 = "",
    piece2 = "",
    item2 = "",
    piece3 = "",
    item3 = "",
    piece4 = "",
    item4 = "",
  } = props || {};

  useEffect(() => {
    console.log('loading data');
  }, []);

  if(!props?.id ) {
    return <>loading</>
  }

  return (
    <ProductItemsWraper>
      <ProductPadding>
        <CategoryImage img={mobile} tablet={tablet} laptop={laptop} product />
        <ProductAmountWraper>
          <ProductTab
            promo={promo}
            productTitle={productTitle}
            info={info}
            link={link}
          />
          <AddItemsToCart price={price} product={data} onClick={onClick} />
        </ProductAmountWraper>
      </ProductPadding>
      <FeatureText
        title={featuretext}
        firstparagraph={firstpara}
        secondparagraph={secondpara}
        titlebox={boxtitle}
        piece1={piece1}
        item1={item1}
        piece2={piece2}
        item2={item2}
        piece3={piece3}
        item3={item3}
        piece4={piece4}
        item4={item4}
      />
      <ProductImages />
    </ProductItemsWraper>
  );
};

export default ProductPage;
