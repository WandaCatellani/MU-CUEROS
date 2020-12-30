import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ content, path }) => {
  return (
    <Link to={path}>
      <button id='Button' >
        {content}
      </button>
    </Link>
  )
}

export default Button