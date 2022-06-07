import styled from "styled-components";
import { device } from "shared/style/varaibles";

export const CategoryHeader = styled.h1`
  color: white;
  font-size: 28px;
  text-transform: uppercase;
  padding: 25px 0;
  background-color: #191919;
  text-align: center;
  margin: 0;

  @media ${device.laptop} {
    padding: 50px 0;
  }
`;

export const CategoryPadding = styled.div`
  width: 100%;
  padding: 40px;

  @media ${device.laptop} {
      padding: 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 180px;
}
`;