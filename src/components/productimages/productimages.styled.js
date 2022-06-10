import { device, colors } from "shared/style/varaibles";
import styled from "styled-components";

export const ImagesContainer = styled.div`
  padding: 40px;
  background-color: ${colors.primaryGray};

  @media ${device.tablet} {
    padding: 40px 80px;
    display: flex;
  }

  @media ${device.laptop} {
    align-items: center;
    padding: 40px 100px;
  }

  @media ${device.laptopL} {
    padding: 40px 180px;
  }

  @media ${device.desktopL} {
    padding: 40px 280px;
  }
`;

export const ImagesColOne = styled.div``;

export const ProductImageMarketing = styled.img`
  width: 100%;
  border-radius: 20px;
  padding: 5px 0;

  @media ${device.tablet} {
    width: 295px;
  }

  @media ${device.laptop} {
    width: 400px;
  }

  @media ${device.laptopL} {
    width: 525px;
  }
`;
