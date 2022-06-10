import styled from "styled-components";
import { colors, device } from "shared/style/varaibles";

const { primaryOrange, secondaryGray } = colors;

export const FeatureContainer = styled.div`
  padding: 50px 40px;

  @media ${device.tablet} {
    padding: 50px 80px;
  }

  @media ${device.laptop} {
    padding: 50px 100px;
    display: flex;
  }

  @media ${device.laptopL} {
    padding: 50px 180px;
  }

  @media ${device.desktopL} {
    padding: 50px 300px;
  }
`;

export const FeatureColOne = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    max-height: 300px;
  }

  @media ${device.laptop} {
      flex: 2;
  }

}
`;

export const FeatureColTwo = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0 0 0;

  @media ${device.laptop} {
    flex: 1;
    align-items: center;
    padding: 0 0 30px 10px;
  }

  @media ${device.laptopL} {
   align-items: start;
   padding: 40px 0 0 0;
  }
}
`;

export const FeatureParagraph = styled.p`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${secondaryGray};

  @media ${device.tablet} {
    max-width: 680px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
`;

export const FeatureItemsContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${device.laptopL} {
    padding: 10px 0;
  }
`;

export const FeaturePiece = styled.span`
  color: ${primaryOrange};
  font-weight: bold;
  font-size: 15px;
`;

export const FeatureItem = styled.p`
  color: ${secondaryGray};
  font-size: 15px;
  text-transform: capitalize;
  padding: 0 0 0 10px;
`;
