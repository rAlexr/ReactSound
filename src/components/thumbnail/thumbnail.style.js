import styled from "styled-components";
import { colors, device } from "shared/style/varaibles";
import { Link } from "react-router-dom";

const { primaryGray, secondaryGray, primaryOrange } = colors;

export const ThumbContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 204px;
  background-color: ${primaryGray};
  border-radius: 20px;
  padding: 0 0 30px 0;

  @media ${device.mobileL} {
      width: 326px;
  }

  @media ${device.tablet} {
    width: 223px;
    height: 175px;
    margin: 0 15px;
  }

  @media ${device.laptopL} {
    width: 350px;
    height: 230px;
    margin: 0;
  }
`;

export const ThumbImage = styled.img`
  height: 160px;
  width: 166px;
  position: absolute;
  top: -50px;

  @media ${device.laptopL} {
    height: 210px;
    width: 230px;
  }
`;

export const ThumbHeader = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
  padding: 0 0 25px 0;
`;

export const ThumbWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ThumbLink = styled(Link)`
  font-size: 13px;
  text-transform: uppercase;
  padding: 1px 10px 0 0;
  color: ${secondaryGray};

  &:hover {
      color: ${primaryOrange};
      font-weight: bold;
  }
`;

export const SvgContainer = styled.div``;
