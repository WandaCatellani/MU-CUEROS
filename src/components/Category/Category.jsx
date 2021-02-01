import "./Category.scss";
import Button from "../Button/Button";

export default function Category({ category }) {
  return (
    <div id="Category" className="listCategory">
{/*       <img
        src={category.picture}
        alt={`img-${category.id}`}
        className="listCategory__img"
      /> */}
      <Button
        path={category.key}
        content={category.description}
        className={"listCategory__button"}
      />
    </div>
  );
}
