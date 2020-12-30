// import React from "react";
// import ItemList from "./ItemList/ItemList";

// export default function ItemListContainer(props) {
//   return (
//     <div>
//       <h2 className="bienvenida">
//         Bienvenido {props.nombre}, a nuestra lista de productos recomendados
//         para vos!
//       </h2>

//       <ItemList />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import Greeting from "../Greeting/Greeting";
import ItemList from "./ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { productsDetails } from "../../dataBase/db";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      productsDetails().then((res) => {
        setItems(res);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <>
      <Greeting greeting={"Bienvenidos al mejor e-commerce!"} />
      {loading ? <Spinner /> : <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;
