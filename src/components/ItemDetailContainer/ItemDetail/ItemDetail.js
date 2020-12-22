import React, { useState, useEffect } from "react";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    } else {
      if (count > 10) {
        setCount(10);
      }
    }
  }, [count]);

  return (
    <div className="ItemDetail">
      <h3 className="productDetail">{props.nombre}</h3>
      <img src="http.cat/202" alt="imagen producto" />
      <h4 className="productDetail">Precio: {props.precio}</h4>
      <ItemCount />
      <br></br>
      <input type="button" value="+" onClick={() => setCount(count + 1)} />
      {count}
      <input type="button" value="-" onClick={() => setCount(count - 1)} />
    </div>
  );
}
export default ItemDetail;
