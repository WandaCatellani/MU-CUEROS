import { useState, useEffect } from "react";
// import Greeting from "../Greeting/Greeting";
import ItemList from "../../components/ItemList/ItemList";
import Spinner from "../../components/Spinner/Spinner";
import { getProducts } from "../../backend/db";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getProducts().then((res) => {
        setItems(res);
        setLoading(false);
      });
    }, 500);
  }, []);

  return (
    <>
      {/* <Greeting greeting={"Bienvenidos"} /> */}
      {loading ? <Spinner /> : <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;
