import React from "react";
import spinner from "../../assets/spinner.gif";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="container spinner">
      <img className="img-fliud spinner-img" src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
