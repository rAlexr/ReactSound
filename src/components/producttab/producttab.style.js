import styled from "styled-components";
import { colors, device } from "shared/style/varaibles";

const {primaryOrange, black, secondaryGray } = colors;

export const PromoProduct = styled.p`
color: ${primaryOrange};
text-transform: upperCase;
letter-spacing: 10px;
padding: 20px 0 0 0;
`;

export const ProductTitle = styled.h3`
color: ${black};
  font-size: 28px;
  letter-spacing: 2px;
  padding: 20px 0;

  @media ${device.tablet} {
      max-width: 270px;
      font-size: ${(props) => props.product ? '35px' : '40px'};
      padding: 0 0 20px 0;
  }

  @media ${device.laptop} {
      font-size: 40px;
      max-width: 298px;
  }

  @media ${device.laptopL} {
    font-size: 56px;
    max-width: 407px;
  }

  
  @media ${device.desktopL} {
    max-width: 500px;
  }
`;

export const ProductInfo = styled.p`
color: black;
font-size: 15px;
padding: 0 0 20px 0;
line-height: 25px;
color: ${secondaryGray};

@media ${device.tablet} {
  max-width: 380px;
}
`;