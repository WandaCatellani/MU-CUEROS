import { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList/CategoryList";
import Spinner from "../../components/Spinner/Spinner";
import { getCategory } from "../../backend/db";
import "./CategoriesContainer.scss";

const CategoriesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getCategory().then((res) => {
        setCategory(res);
        setLoading(false);
      });
    }, 500);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div className="home">
          <Spinner />
        </div>
      ) : (
        <div id="CategoryContainer" className="categorias">
          <CategoryList categories={category} />
        </div>
      )}
    </>
  );
};

export default CategoriesContainer;
