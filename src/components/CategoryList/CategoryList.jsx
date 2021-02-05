import Category from "../Category/Category";
import "./CategoryList.scss";

export default function CategoryList({ categories }) {
  return (
    <div className="categorias">
      <h1 className="title-categoryContainer">Categorias</h1>

      <div className="categoryList">
        <div className="contenedor">
          {categories.map((category, i) => {
            return <Category category={category} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
