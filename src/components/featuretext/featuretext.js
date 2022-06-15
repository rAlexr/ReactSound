import {
  FeatureColOne,
  FeatureColTwo,
  FeatureContainer,
  FeatureItem,
  FeatureItemsContainer,
  FeatureParagraph,
  FeaturePiece,
  FeatureTitle,
} from "./featuretext.styled";

const FeatureText = ({
  title = "",
  firstparagraph = "",
  secondparagraph = "",
  titlebox = "",
  piece1='',
  item1='',
  piece2='',
  item2='',
  piece3='',
  item3='',
  piece4='',
  item4=''
}) => {
  return (
    <FeatureContainer>
      <FeatureColOne>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureParagraph>{firstparagraph}</FeatureParagraph>
        <FeatureParagraph>{secondparagraph}</FeatureParagraph>
      </FeatureColOne>

      <FeatureColTwo>
        <FeatureTitle>{titlebox}</FeatureTitle>

        <FeatureItemsContainer>
          <FeaturePiece>{`${piece1}x`}</FeaturePiece>
          <FeatureItem>{item1}</FeatureItem>
        </FeatureItemsContainer>

        <FeatureItemsContainer>
          <FeaturePiece>{`${piece2}x`}</FeaturePiece>
          <FeatureItem>{item2}</FeatureItem>
        </FeatureItemsContainer>

        <FeatureItemsContainer>
          <FeaturePiece>{`${piece3}x`}</FeaturePiece>
          <FeatureItem>{item3}</FeatureItem>
        </FeatureItemsContainer>

        <FeatureItemsContainer>
          <FeaturePiece>{`${piece4}x`}</FeaturePiece>
          <FeatureItem>{item4}</FeatureItem>
        </FeatureItemsContainer>
      </FeatureColTwo>
    </FeatureContainer>
  );
};

export default FeatureText;
