import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors, device } from "shared/style/varaibles";

const { primaryOrange, secondaryGray } = colors;

export const LinkTo = styled(Link)`
  color: ${secondaryGray};
  text-transform: capitalize;
  display: block;
  margin: 0 0 20px 0;

  &:hover {
    color: ${primaryOrange};
  }

  @media ${device.tablet} {
    padding: 0 18px;
  }
`;
