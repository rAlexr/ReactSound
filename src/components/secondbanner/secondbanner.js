import LinkButton from "components/linkbutton";

import mobile from "shared/img/home/mobile/banner-speaker-zx7.jpg";
import tablet from "shared/img/home/tablet/banner-speaker-zx7.jpg";
import desktop from "shared/img/home/desktop/banner-speaker-zx7.jpg";


const SecondBanner = () => {
  return (
    <div className="secondbanner">
      <picture className="secondbanner-img-container">
        <source srcSet={desktop} media={"(min-width: 1024px)"} />
        <source srcSet={tablet} media={"(min-width: 768px)"} />
        <img src={mobile} alt={"headset"} />
      </picture>
      <div className="secondbanner-text-container">
        <h2>zx7 speaker</h2>
        <LinkButton link={"/"} />
      </div>
    </div>
  );
};

export default SecondBanner;
