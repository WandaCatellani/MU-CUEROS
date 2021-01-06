import React from "react";
import "./Greeting.scss";

const Greeting = ({ greeting }) => {
  return <h2 className="title">{greeting}</h2>;
};

export default Greeting;