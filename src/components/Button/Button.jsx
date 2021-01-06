import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ content, path, callback }) => {
  return (
    <Link to={path}>
      <button id='Button' onClick= {callback}>
        {content} 
      </button>
    </Link>
  )
}

export default Button