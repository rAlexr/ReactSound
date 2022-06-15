import { useParams } from "react-router-dom";
import { getData } from "shared/js";
import { useEffect, useState } from "react";
import ProductTab from "components/producttab";

import {
  ProductAmountWraper,
  ProductItemsWraper,
  ProductPadding,
} from "./productpage.styled";

import { CategoryImage } from "components/categorytab/categorytab.style";
import FeatureText from "components/featuretext";
import ProductImages from "components/productimages";
import AddItemsToCart from "components/additemstocart";

const ProductPage = () => {
  const [mydata, setmyData] = useState({});

  const params = useParams();
  console.log(params)

  useEffect(() => {
    getData(params.id).then((res) => setmyData(res.data));

    // eslint-disable-next-line
  }, []);

  const mobile = mydata?.categoryImage?.mobile;
  const tablet = mydata?.categoryImage?.tablet;
  const desktop = mydata?.categoryImage?.desktop;

  if( params?.id == undefined ) {
    return <>Loading</>
  }

  return (
    <ProductItemsWraper>
      <ProductPadding>
        <CategoryImage img={mobile} tablet={tablet} laptop={desktop} product />
        <ProductAmountWraper>
          <ProductTab
            promo={"new product"}
            productTitle={mydata?.name}
            info={mydata?.description}
            link={"/"}
          />
          <AddItemsToCart price={mydata?.price} product={mydata} />
        </ProductAmountWraper>
      </ProductPadding>
      <FeatureText
        title={mydata?.name}
        firstparagraph={mydata?.description}
        secondparagraph={mydata?.features}
        titlebox={"in the box"}
        piece1={mydata?.includes?.quantity1}
        item1={mydata?.includes?.item1}
        piece2={mydata?.includes?.quantity2}
        item2={mydata?.includes?.item2}
        piece3={mydata?.includes?.quantity3}
        item3={mydata?.includes?.item3}
        piece4={mydata?.includes?.quantity4}
        item4={mydata?.includes?.item4}
      />
      <ProductImages />
    </ProductItemsWraper>
  );
};

export default ProductPage;
