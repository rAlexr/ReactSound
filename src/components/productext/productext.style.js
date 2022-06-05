import styled from "styled-components";
import { colors, device } from "shared/style/varaibles";

const { primaryGray, primaryOrange, white } = colors;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media ${device.laptop} {
    align-items: start;
    text-align: start;
  }

  @media ${device.desktop} {
  }

  @media ${device.desktopL} {
  }
`;

export const PromoParagraph = styled.p`
  color: ${(props) => (props.gray ? primaryGray : primaryOrange)};
  text-transform: upperCase;
  letter-spacing: 10px;
  padding: 20px 0 0 0;

  @media ${device.desktop} {
    font-size: 23px;
  }
`;

export const Header = styled.h1`
  color: ${white};
  font-size: 50px;
  font-weight: 600;

  @media${device.tablet} {
    font-size: 76px;
  }

  @media${device.laptop} {
    font-size: 56px;
  }

  @media ${device.desktopL} {
    font-size: 76px;
    width: 450px;
  }
`;

export const InfoParagraph = styled.p`
  color: ${primaryGray};
  max-width: 310px;
  letter-spacing: 1px;
  padding: 0 0 20px 0;

  @media ${device.laptop} {
    font-size: 18px;
    max-width: 400px;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }
`;
