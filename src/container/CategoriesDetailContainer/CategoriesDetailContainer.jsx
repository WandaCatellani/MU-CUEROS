import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryDetail from "../../components/CategoryDetail/CategoryDetail";
import Spinner from "../../components/Spinner/Spinner";
import { getCategoryById } from "../../backend/db";

const CategoriesDetailContainer = () => {
  const [product, setProduct] = useState([]); /* {} */
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getCategoryById(categoryId).then((res) => {
        setProduct(res);
        setLoading(false);
      });
    }, 1000);
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CategoryDetail product={product} category={categoryId} />
      )}{" "}
    </>
  );
};

export default CategoriesDetailContainer;
