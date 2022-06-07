import styled from "styled-components";
import { colors } from "shared/style/varaibles";

const { primaryOrange, black, secondaryOrange, white } = colors;

export const BasicButton = styled.button`
  width: ${(props) => props.count ? '30px' : '160px'};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${(props) => (props.orange ? primaryOrange : black)};
  color: ${white};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.orange ? secondaryOrange : "transparent"};
    color: ${black};
  }
`;
