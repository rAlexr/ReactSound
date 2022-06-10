import { PromoProduct, ProductTitle, ProductInfo } from "./producttab.style";

const ProductTab = ({ promo = "", productTitle = "", info = "" }) => {
  return (
    <>
      <PromoProduct>{promo}</PromoProduct>
      <ProductTitle product>{productTitle}</ProductTitle>
      <ProductInfo>{info}</ProductInfo>
    </>
  );
};

export default ProductTab;
