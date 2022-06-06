import styled from 'styled-components';
import { device, padding } from 'shared/style/varaibles';

const { paddingLaptopSmall, paddingLaptopLarge } = padding;

export const PaddingContainer = styled.div`
    background-color: white;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.laptop} {
        padding: ${paddingLaptopSmall};
    }

    @media ${device.laptopL} {
      padding: ${paddingLaptopLarge};
    }

    @media ${device.desktopL} {
        padding: ${padding.paddingDesktop}
    }
`;