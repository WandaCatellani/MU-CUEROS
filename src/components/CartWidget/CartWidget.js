import React from "react";
import "./CartWidget.scss";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

class CartWidget extends React.Component {
  render() {
    return(
    <Link to="/cart" className="cartIcon">
      <FaOpencart />
    </Link>)
  }
}

export default CartWidget;
