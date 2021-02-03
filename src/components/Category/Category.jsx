import "./Category.scss";
import Button from "../Button/Button";

export default function Category({ category }) {
  return (
    <div className="category">
      <img src={category.picture} alt="product" className="category-img" />
      
      <Button
        path={category.key}
        content={category.description}
        className={"btn-category"}
      />
    </div>
  );
}
