import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";
import { getProductsById } from "../../backend/db";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductsById(id).then((res) => {
        setProduct(res);
        setLoading(false);
      });
    }, 1000);
  }, [id]);

  return <>{loading ? <Spinner /> : <ItemDetail product={product} />} </>;
};

export default ItemDetailContainer;
