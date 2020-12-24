import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="ItemDetail">
      <h3 className="productDetail">{item.title}</h3>
      <p> {item.model} </p>
      <img src={item.picture} alt="img-product" />
      <p> {item.description} </p>
      <h4 className="productDetail">Precio: {item.price}</h4>
      <ItemCount />
    </div>
  );
}
export default ItemDetail;
