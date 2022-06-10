import ProductPage from "pages/productpage/productpage";

import mobile from "shared/img/headphones-xx99-mark-two/mobile/image-product.jpg";
import tablet from "shared/img/headphones-xx99-mark-two/tablet/image-product.jpg";
import laptop from "shared/img/headphones-xx99-mark-two/desktop/image-product.jpg";

import data from "shared/json/xx99-mark-one.json";
const { price } = data[0];

const Productxx59 = () => {
  return (
    <>
      <ProductPage
        mobile={mobile}
        tablet={tablet}
        laptop={laptop}
        data={data}
        promo={"new product"}
        productTitle={"XX59 Headphones"}
        info={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}
        link={"/"}
        onClick={() => console.log("click")}
        price={price}
        featuretext={"feature"}
        firstpara={"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."}
        secondpara={"More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."}
        boxtitle={"in the box"}
        piece1={"2x"}
        item1={"Headphone Unit"}
        piece2={"1x"}
        item2={"Replacement Earcups"}
        piece3={"1x"}
        item3={"User Manual"}
        piece4={"1x"}
        item4={"3.5mm 5m Audio Cable"}
      />
    </>
  );
};

export default Productxx59;
