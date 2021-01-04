import { useState } from "react";
import "./ItemCount.scss";
import Button from "../Button/Button";

const ItemCount = ({ initialValue, maxValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const adding = () => {
    if (counter >= initialValue && counter < maxValue) {
      setCounter(counter + 1);
      onAdd(counter + 1);
    } else if (counter === maxValue) {
      console.log("maxValuee");
    }
  };

  const removing = () => {
    if (counter > initialValue) {
      setCounter(counter - 1);
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
