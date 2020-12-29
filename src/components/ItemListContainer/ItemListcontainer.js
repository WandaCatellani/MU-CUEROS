import React from "react";
import ItemList from "./ItemList/ItemList";

export default function ItemListContainer(props) {
  return (
    <div>
      <h2 className="bienvenida">
        Bienvenido {props.nombre}, a nuestra lista de productos recomendados
        para vos!
      </h2>

      <ItemList />
    </div>
  );
}
