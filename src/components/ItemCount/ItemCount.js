// import React, { useState, useEffect } from "react";

// export default function ItemCount(props) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 0) {
//       setCount(0);
//     } else {
//       if (count > 10) {
//         setCount(10);
//       }
//     }
//   }, [count]);

//   return (
//     <div className="itemsCount">
//       <input
//         className="btn-rem"
//         type="button"
//         value="-"
//         onClick={() => setCount(count - 1)}
//       />
//       <input type="text" value={count} readOnly />
//       <input
//         className="btn-add"
//         type="button"
//         value="+"
//         onClick={() => setCount(count + 1)}
//       />
//     </div>
//   );
// }

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