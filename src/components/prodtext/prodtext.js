import LinkButton from "components/linkbutton";
import { Header, PromoParagraph, InfoParagrpah, TextContainer } from "./prod.style";

const ProductText = ({ promo = "", header = "", info = "", btncolor}) => {
  return (
    <>
      <TextContainer>
        <PromoParagraph gray>{promo}</PromoParagraph>
        <Header white large huge>{header}</Header>
        <InfoParagrpah white>{info}</InfoParagrpah>
        <LinkButton color={btncolor} link={"/"} />
      </TextContainer>
    </>
  );
};

export default ProductText;
