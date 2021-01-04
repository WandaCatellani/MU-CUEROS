import React from "react";
import "./CartWidget.scss";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="cartIcon">
      <FaOpencart />
    </Link>
  );
};

export default CartWidget;
