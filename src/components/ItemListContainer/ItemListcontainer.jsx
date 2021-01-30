import { useState, useEffect } from "react";
// import Greeting from "../Greeting/Greeting";
import ItemList from "./ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../backend/db";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
