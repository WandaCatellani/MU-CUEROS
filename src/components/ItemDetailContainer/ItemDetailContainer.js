import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { products } from "../Item/Item";

function ItemDetailContainer(props) {
  const [prod, setProd] = useState({});

  useEffect(() => {
    console.log(prod);
    setTimeout(() => {
      let pedido = fetch({ products });
      console.log(pedido);
      pedido.then((response) => {
        setProd(response);
      });
    }, 1000);
  }, [prod]); //Esto se ejecuta apenas se monta el componente / onInit
  
  return (
    <div>
      {prod ? (
        <ItemDetail item={prod} />
      ) : (
        <>
          <p className="p-loader">
            Trayendo información desde base de datos...
          </p>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;