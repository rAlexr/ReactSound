import styled from "styled-components";
import { colors, device } from "shared/style/varaibles";

const { primaryGray, primaryOrange, black, white } = colors;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9;

  @media ${device.laptop} {
      align-items: start;
      text-align: start;
      flex: 1;
      jusify-
  }
`;

export const PromoParagraph = styled.p`
  color: ${(props) => (props.gray ? primaryGray : primaryOrange)};
  display: ${(props) => (props.display ? "initial " : "none")};
  text-transform: upperCase;
  letter-spacing: 10px;
  padding: 20px 0 0 0;
`;

export const Header = styled.h3`
  color: ${(props) => (props.white ? white : black)};
  font-size: 28px;
  letter-spacing: 2px;
  padding: 20px 0;

  @media ${device.tablet} {
      max-width: 270px;
      font-size: 40px;
      padding: 0 0 20px 0;
  }

  @media ${device.laptop} {
      font-size: ${(props) => props.large ? '56px' : '40px'};
      max-width: ${(props) => props.large ? '380px' : '270px'};
  }

  @media ${device.laptopL} {
    font-size: ${(props) => props.huge ? '76px' : '56px'};
    max-width: ${(props) => props.huge ? '580px' : '270px'};
  }
`;

export const InfoParagrpah = styled.p`
  color: ${(props) => (props.white ? white : black)};
  font-size: 15px;
  padding: 0 0 20px 0;
  line-height: 25px;

  @media ${device.tablet} {
    max-width: 380px;
  }
`;
