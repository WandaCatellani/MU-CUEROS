/* import React, { useState } from "react";
import "./ItemCount.scss";
import { FaOpencart } from "react-icons/fa";
import Button from "react-bootstrap/Button"; */

/* function ItemCount({ stock, initial, onAdd }) {
  const [count, setcount] = useState(initial);

  const addCount = () => {
    if (count >= initial && count < stock) {
      return setcount(count + 1), onAdd(count + 1);
    } else {
      alert(`No hay mas stock`);
    }
  };

  const removeCount = () => {
    if (count > initial) {
      return setcount(count - 1), onAdd(count - 1);
    }
  };

  const handleAdd = () => alert(`Has agregado ${count} productos a tu carrito`);

  return (
    <div className="centered itemsCount">
      <Button onClick={addCount} className="btn-add">
        {" "}
        +{" "}
      </Button>

      <span>{count}</span>

      <Button onClick={removeCount} className="btn-rem">
        {" "}
        -{" "}
      </Button>

      <Button onClick={handleAdd} className="btn-cart">
        {" "}
        Agregar al carrito{" "}
        <span className="cartIconCard">
          {" "}
          <FaOpencart />{" "}
        </span>
      </Button>
    </div>
  );
}

export default ItemCount;
 */

import { useState } from "react";
import "./ItemCount.scss";
import { FaOpencart } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const ItemCount = () => {
  const [qty, setQty] = useState(1);

  const handleClickResta = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onAdd = () => {
    alert(`Agregaste ${qty} productos al carrito`);
  };

  return (
    <div className="centered itemsCount">
        <Button
          className="btn-add"
          disabled={qty === 1 ? "disabled" : null}
          onClick={handleClickResta}
        >
          -
        </Button>
        <input type="text" value={qty} readOnly />
        <Button className="btn-rem" onClick={() => setQty(qty + 1)}>
          +
        </Button>

      <Button className="btn-cart" onClick={onAdd}>
        Agregar al carrito{" "}
        <span className="cartIconCard">
          {" "}
          <FaOpencart />{" "}
        </span>
      </Button>
    </div>
  );
};

export default ItemCount;
