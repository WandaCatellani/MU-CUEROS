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
import Button from "../Button/Button";
// import { FaOpencart } from "react-icons/fa";

const ItemCount = ({ initialValue, maxValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const adding = () => {
    if (counter >= initialValue && counter < maxValue) {
      setCounter(counter + 1)
      onAdd(counter + 1);
    } else if (counter === maxValue) {
      console.log("maxValuee");
    }
  };

  const removing = () => {
    if (counter > initialValue) {
      setCounter(counter - 1)
      onAdd(counter - 1);
    } else if (counter <= initialValue) {
      console.log("minValue");
    }
  };

  return (
    <>
      <div className="centered itemsCount">
        <h3>{counter}</h3>

        <Button
          content={"+"}
          callback={adding}
          className="buttonCounter"
        ></Button>

        <Button
          content={"-"}
          callback={removing}
          className="buttonCounter"
        ></Button>
      </div>
    </>
  );
};

export default ItemCount;