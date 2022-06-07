import styled from "styled-components";
import { device } from "shared/style/varaibles";

export const CategoryContainer = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 40px 100px;
  }

  @media ${device.laptopL} {
    padding: 40px 180px;
  }
`;

export const CategoryImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 40px;
  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    width: 400px;
  }

  @media ${device.laptop} {
    background-image: url(${(props) => props.laptop});
    height: 400px;
    flex: 1;
  }

  @media ${device.laptopL} {
    height: 500px;
  }

  @media ${device.desktopL} {
    height: 600px;
  }
`;

export const CategoryWrapper = styled.div`
  margin: 40px 0;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    height: 70vh;
  }

  @media ${device.laptopL} {
    width: 100%;
    align-items: center;
    height: 80vh;
  }
`;
