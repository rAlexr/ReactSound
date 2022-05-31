import { Link } from "react-router-dom";

const Button = ({ link, text = undefined ? "" : "see product", className = "", onClick }) => {
  const handleClick = () => {
    if(typeof onClick === 'function') {
      onClick()
    }

  }

  return (
    <Link className={` button ${className} `} to={link} onClick={handleClick}>
      {text}
    </Link>
  );
};

export default Button;
