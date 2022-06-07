import LinkButton from "components/linkbutton";
import { Header, InfoParagrpah, PromoParagraph, TextContainer } from "components/prodtext/prod.style";
import { CategoryContainer, CategoryImage, CategoryWrapper } from "./categorytab.style";

const CategoryTab = ({
  mobile,
  tablet,
  laptop,
  promo = "",
  productTitle = "",
  info = "",
  reverse,
  link
}) => {
  return (
    <>
      <CategoryContainer>
        <CategoryWrapper reverse={reverse}>
          <CategoryImage img={mobile} tablet={tablet} laptop={laptop} />
          <TextContainer center padd>
            <PromoParagraph display>{promo}</PromoParagraph>
            <Header black large huge>
              {productTitle}
            </Header>
            <InfoParagrpah black>{info}</InfoParagrpah>
            <LinkButton color={"orange"} link={link} />
          </TextContainer>
        </CategoryWrapper>
      </CategoryContainer>
    </>
  );
};

export default CategoryTab;
