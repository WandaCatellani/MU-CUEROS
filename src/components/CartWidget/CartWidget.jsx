import React from "react";
import "./CartWidget.scss";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import useCartContext from "../../context/CartContext";

const CartWidget = () => {
  const { productsCount } = useCartContext();
  return (
    <>
      <Link to="/cart" className="cartIcon">
        <IoMdCart />
      </Link>
      <span className="number-cart">{productsCount()}</span>
    </>
  );
};

export default CartWidget;
