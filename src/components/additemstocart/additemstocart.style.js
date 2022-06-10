import styled from "styled-components";
import { colors } from "shared/style/varaibles";
const { primaryOrange, secondaryGray, white } = colors;

export const DisplayTotal = styled.span`
  font-weight: 800;
  display: block;
  margin: 0 0 20px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const AmountButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px 0 0;
`;

export const AmountButton = styled.button`
  width: 30px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${secondaryGray};
  color: ${white};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;

  &:hover {
    background-color: ${primaryOrange};
    cursor: pointer;
  }
`;

export const CountSpan = styled.span`
  width: 40px;
  text-align: center;
  background-color: ${secondaryGray};
  color: ${primaryOrange};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
