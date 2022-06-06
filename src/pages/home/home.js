import FirstBanner from "components/firstbanner";
import Hero from "components/hero";
import ThumbNailGirdle from "components/thumbnailgirdle";

import { PaddingContainer } from "./home.styled";


const Home = () => {
  return (
    <div className='home'>
     <Hero />
     <PaddingContainer>
      <ThumbNailGirdle />
      <FirstBanner />
     </PaddingContainer>
     
    </div>
  );
};

export default Home;
