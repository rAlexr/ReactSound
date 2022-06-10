import { device } from "shared/style/varaibles";
import styled from "styled-components";

export const ProductItemsWraper = styled.div`
  width: 100%;
`;

export const ProductAmountWraper = styled.div`
  @media ${device.laptop} {
    padding: 0 0 0 100px;
    flex: 1;
  }
`;

export const ProductPadding = styled.div`
  width: 100%;
  padding: 40px;

  @media ${device.tablet} {
    padding: 80px 40px 40px 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media ${device.laptop} {
    padding: 80px 100px;
  }

  @media ${device.laptopL} {
    padding: 80px 180px 40px 180px;
  }

  @media ${device.desktopL} {
    padding: 80px 200px 40px 200px ;
    
  }
`;

export const ThumbNailPadding = styled.div`
  padding: 0 40px;

  @media ${device.tablet} {
    padding: 0 80px;
  }

  @media ${device.laptop} {
    padding: 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 180px;
  }

  @media ${device.desktopL} {
    padding: 0 200px;
  }
`;
