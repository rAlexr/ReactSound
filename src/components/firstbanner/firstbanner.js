import mobile from "shared/img/home/mobile/speaker-zx9.png";
import tablet from "shared/img/home/tablet/speaker-zx9.png";
import desktop from "shared/img/home/desktop/speaker-zx9.png";
import ProductText from "components/prodtext";

import pattern from 'shared/img/home/desktop/special.jpg'

const FirstBanner = () => {
  return (
    <div className="firstbanner">
      <div className="firstbanner-background" style={{backgroundImage: `url(${pattern})`}}></div>
      <picture className="firstbanner-img-container">
        <source srcSet={desktop} media={"(min-width: 1024px)"} />
        <source srcSet={tablet} media={"(min-width: 768px)"} />
        <img src={mobile} alt={"headset"} />
      </picture>

      <ProductText
        promo={"new product"}
        header={"XX99 Mark II Headphones"}
        info={
          "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        }
        btncolor={''}
      />
    </div>
  );
};

export default FirstBanner;
