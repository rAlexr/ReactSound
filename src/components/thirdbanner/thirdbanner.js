import laptop from "shared/img/home/desktop/banner-earphones-yx1.jpg";
import tablet from "shared/img/home/tablet/banner-earphones-yx1.jpg";
import mobile from "shared/img/home/mobile/banner-earphones-yx1.jpg";

import LinkButton from "components/linkbutton";

const ThirdBanner = () => {
  return (
    <div className="thirdbanner">
      <picture className="thirdbanner-special">
        <source srcst={`${laptop}`} media={'(min-width: 1024px)'} />
        <source srcst={`${tablet}`} media={'(min-width: 768px)'} />
        <source srcst={`${mobile}`} media={'(min-width: 300px)'} />

        <img src={mobile} alt={'speakers'} />
      </picture>

      <div className="thirdbanner-text">
        <h2>YX1 EARPHONES</h2>
        <LinkButton link={"/earphones"} text={"see product"} classname={"black"} />
      </div>
    </div>
  );
};

export default ThirdBanner;
