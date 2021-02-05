import "./Category.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  return (
    <div className="animate__animated  animate__fadeInUp category">
      <Link to={`/detail/${category.id}`} className="a-img">
        <img className="category-img" src={category.picture} alt="product" />
        
        <h3 className="category-title">{category.title}</h3>

        <div className="content">
          <div className="size">
            <h4>Size</h4>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>

          <div className="colour">
            <h4>Color</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Button
            className={"btn-category"}
            content={category.description}
            path={category.key}
          />
        </div>
      </Link>
    </div>
  );
}
