import LinkButton from "components/linkbutton";
import {
  Header,
  InfoParagraph,
  PromoParagraph,
  TextContainer,
} from "./productext.style";

const Productext = ({ promo = "", header = "", info = "" }) => {
  return (
    <>
        <TextContainer>
          <PromoParagraph gray>{promo}</PromoParagraph>
          <Header>{header}</Header>
          <InfoParagraph>{info}</InfoParagraph>
          <LinkButton color={'orange'} link={'/'} />
        </TextContainer>
    </>
  );
};

export default Productext;
