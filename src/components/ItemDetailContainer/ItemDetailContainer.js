import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

function ItemDetailContainer(props) {
  const [item, setItem] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/")
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          setItem(data);
        });
    }, 3000);
  }, [item]); //Esto se ejecuta apenas se monta el componente / onInit

  return (
    <div>
      {item ? (
        <ItemDetail nombre={item.nombre} img={item.imagen} precio={item.precio} />
      ) : (
        <>
          <p className="p-loader">Trayendo información desde base de datos...</p>
          <Spinner />
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
