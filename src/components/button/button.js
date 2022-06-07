import { BasicButton } from "./button.style";

const Button = ({ text = undefined ? "" : "basic button", onClick, color, width }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <BasicButton onClick={handleClick} orange={color} count={width}>
      {text}
    </BasicButton>
  );
};

export default Button;
