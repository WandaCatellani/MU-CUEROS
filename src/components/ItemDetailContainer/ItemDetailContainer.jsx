import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { getProductById } from "../../dataBase/db";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProductById(Number(id)).then((res) => {
        setProduct(res);
        setLoading(false);
      });
    }, 1000);
  }, [id]);

  return (
    <div id="ItemDetailContainer">
      {loading ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
