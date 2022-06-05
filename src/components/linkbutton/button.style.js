import styled from "styled-components";
import { colors } from "shared/style/varaibles";
import { Link } from "react-router-dom";

const { primaryOrange, black, secondaryOrange, white } = colors;

export const LinkButtonStyle = styled(Link)`
  width: 160px;
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

  &:hover {
    background-color: ${(props) =>
      props.orange ? secondaryOrange : "transparent"};
    color: ${black};
    border: 1px solid ${black};
  }
`;
