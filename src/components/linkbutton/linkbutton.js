import { LinkButtonStyle } from "./button.style";

const LinkButton = ({ link, text = undefined ? "" : "see product", color }) => {
  return (
    <LinkButtonStyle to={link} orange={color}>
      {text}
    </LinkButtonStyle>
  );
};

export default LinkButton;
