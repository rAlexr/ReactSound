import { Link } from "react-router-dom";

const Button = ({ link, text = undefined ? "" : "see product", className = "" }) => {
  return (
    <Link className={` button ${className} `} to={link}>
      {text}
    </Link>
  );
};

export default Button;
