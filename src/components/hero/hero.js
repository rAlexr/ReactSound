import Productext from "components/productext";

import mobile from "shared/assets/home/mobile/moba.jpg";
import tablet from "shared/assets/home/tablet/image-header-1536.jpg";
import { ImageContainer, ContextContainer, HeroContainer } from "./hero.style";

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer mobile={mobile} tablet={tablet} />
      <ContextContainer>
        <Productext
          promo={"new product"}
          header={"XX99 Mark II Headphones"}
          info={
            "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          }
        />
      </ContextContainer>
    </HeroContainer>
  );
};

export default Hero;
