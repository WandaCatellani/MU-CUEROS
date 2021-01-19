import React from "react";
import useCartContext from "../../context/CartContext";
import Button from "../../components/Button/Button";
import "./Cart.scss";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { products, delProduct, getGrandTotal } = useCartContext();

  const handleDel = (p) => {
    delProduct(p.id);
  };

  return (
    <>
      <Button id="btn-volver" content={`Seguir comprando`} path="/" />
      <div className="container cart">
        <div className="container card-titles">
          <h5>Producto</h5>
          <h5>Descripción</h5>
          <h5>Cantidad</h5>
          <h5>Precio</h5>
        </div>-

        {products.map((product) => (
          <div className="container cart-list">
            <img className="cart-img" src={product.picture} alt="item" />
            <h6 lassName="cart-description">{product.description}</h6>
            <h6 className="cart-count">{product.quantity}</h6>
            <h6 className="cart-price">${product.price}</h6>

            <MdDelete className="cart-del" onClick={() => handleDel(product)} />
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h5>Total:</h5>
        <h5>${getGrandTotal()}</h5>
      </div>
    </>
  );
};

export default Cart;
