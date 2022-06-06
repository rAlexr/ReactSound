import LinkButton from "components/linkbutton";
import {
  HeroHeader,
  HeroInfoParagraph,
  HeroPromoParagraph,
  HeroTextContainer,
} from "./herotext.style";

const HeroText = ({ promo = "", header = "", info = "" }) => {
  return (
    <>
        <HeroTextContainer>
          <HeroPromoParagraph gray>{promo}</HeroPromoParagraph>
          <HeroHeader>{header}</HeroHeader>
          <HeroInfoParagraph>{info}</HeroInfoParagraph>
          <LinkButton color={'orange'} link={'/'} />
        </HeroTextContainer>
    </>
  );
};

export default HeroText;
