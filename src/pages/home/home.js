import FirstBanner from "components/firstbanner";
import Footer from "components/footer";
import Hero from "components/hero";
import MarketingBanner from "components/marketingbanner";
import SecondBanner from "components/secondbanner";
import ThirdBanner from "components/thirdbanner";
import ThumbNailGirdle from "components/thumbnailgirdle";

import { PaddingContainer } from "./home.styled";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PaddingContainer>
        <ThumbNailGirdle />
        <FirstBanner />
        <SecondBanner />
        <ThirdBanner />
        <MarketingBanner />
      </PaddingContainer>
      <Footer />
    </div>
  );
};

export default Home;
