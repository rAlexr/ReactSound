import HeroText from "components/herotext";

import { ContainerWithBackground, ContextContainer, HeroContainer } from "./hero.style";

import mobile from "shared/assets/home/mobile/moba.jpg";
import tablet from "shared/assets/home/tablet/image-header-1536.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <ContainerWithBackground mobile={mobile} tablet={tablet} />
      <ContextContainer>
        <HeroText
          gray
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
