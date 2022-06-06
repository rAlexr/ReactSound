import styled from "styled-components";

import { device, padding } from "shared/style/varaibles";

const { paddingLaptopSmall, paddingLaptopLarge, paddingDesktop } = padding;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row-reverse;
    padding: ${paddingLaptopSmall};
  }

  @media ${device.laptopL} {
      padding: ${paddingLaptopLarge};
  }

  @media ${device.desktopL} {
      padding: ${paddingDesktop};
  }
`;

export const ContainerWithBackground = styled.div`
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
