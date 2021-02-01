import Category from "../Category/Category";

export default function CategoryList({ categories }) {
  return (
    <div className="container">
      {categories.map((category, i) => {
        return <Category item={category} key={i} />;
      })}
    </div>
  );
}
