import styled from "styled-components";

import { device } from "shared/style/varaibles";

export const Girdle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
    height: 50vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
