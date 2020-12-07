import React from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartWidget.scss";

class CartWidget extends React.Component {
  render() {
    return(
    <div className="cartIcon">
      <FaOpencart />
    </div>)
  }
}

export default CartWidget;
