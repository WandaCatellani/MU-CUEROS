import React from "react";
import "./CartWidget.scss";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="cartIcon">
      <IoMdCart />
    </Link>
  );
};

export default CartWidget;
