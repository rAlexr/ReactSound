import { BasicButton } from "./button.style";

const Button = ({ text = undefined ? "" : "basic button", onClick }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <BasicButton black onClick={handleClick}>
      {text}
    </BasicButton>
  );
};

export default Button;
