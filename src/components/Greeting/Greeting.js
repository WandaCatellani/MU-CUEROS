import React from "react";
import "./Greeting.scss";

const Greeting = ({ greeting }) => {
  return <h1 className="title">{greeting}</h1>;
};

export default Greeting;