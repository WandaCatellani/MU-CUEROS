import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ content, path, callback, type }) => {
  return (
    <Link to={path}>
      <button id="button" onClick={callback} type={type}>
        {content}
      </button>
    </Link>
  );
};

export default Button;
