import styled from "styled-components";
import { device } from "shared/style/varaibles";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row-reverse;
    padding: 0 0 0 100px
  }

  @media ${device.laptopL} {
      padding: 0 150px;
  }

  @media ${device.desktopL} {
      padding: 0 200px;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${(props) => props.mobile});
  width: 100%;
  height: 60vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    height: 90vh;
    background-size: cover;
  }

  @media ${device.desktopL} {
    flex: 1;
    height: 100vh;

  }

  //   @media ${device.laptop} {
  //     background-image: url(${(props) => props.laptop});
  //   }
`;

export const ContextContainer = styled.div`
  position: absolute;

  @media ${device.laptop} {
    position: initial;
  }

  @media ${device.desktop} {
    flex: 1;
  }
`;
