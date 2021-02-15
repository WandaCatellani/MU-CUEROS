import React from "react";
import useCartContext from "../../Context/CartContext";
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
      <div className="head-titu">
        <Button
          id="btn-volver"
          content={`Seguir comprando`}
          path="/categories"
        />
      </div>
      
      <div className="container cart">
        <div className="container card-titles">
          <h5 className="title-product">Producto</h5>
          <h5 className="title-desc">Descripción</h5>
          <h5 className="title-cant">Cantidad</h5>
          <h5 className="title-price">Precio</h5>
        </div>

        {products.map((product) => (
          <div className="container cart-list">
            <img
              className="img-fluid cart-img"
              src={product.picture}
              alt="item"
            />
            <h6 className="cart-desc">{product.description}</h6>
            <h6 className="cart-count">{product.quantity}</h6>
            <h6 className="cart-price">${product.price}</h6>

            <MdDelete className="cart-del" onClick={() => handleDel(product)} />
          </div>
        ))}
      </div>

      {/* <hr className="hr-cart" /> */}

      <div className="container cart-total">
        <h5 className="title-total">Total:</h5>
        <h5 className="total-number">${getGrandTotal()}</h5>

        <Button content={"Comprar"} path={"/checkout"} />
      </div>
    </>
  );
};

export default Cart;
