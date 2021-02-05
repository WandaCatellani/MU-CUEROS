import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import VanillaTilt from "vanilla-tilt";
import Swal from "sweetalert2";
import "./ItemDetail.scss";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import useCartContext from "../../context/CartContext";
import Section from "../Section/Section";
// import { MdAddShoppingCart } from "react-icons/md";

const ItemDetail = ({ product, options, ...rest }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCartContext();
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  const onAddItem = (counter) => {
    setQuantity(counter);
  };

  const addToCart = () => {
    addProduct(product, quantity);
    Swal.fire({
      imageUrl: `'${product}'`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      title: "Producto Agregado",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <Section title="Detalle de productos">
      <Button content={"Atras"} path={"/"} className="btn-atras" />
      <Row className="detail">
        <Col xs={12} md={5} ref={tilt} {...rest} className="detail-item">
          <img className="item-img" src={product.picture} alt={"Imagen"} />

          <div className={"itemDetail"}>
            <h3 className={"item-title"}>{product.title}</h3>

            <ItemCount initialValue={1} maxValue={15} onAdd={onAddItem} />

            <Button
              className="item-btn"
              content={`Agregar al Carrito ${quantity} ${product.title}`}
              callback={addToCart}
            />

            {/* <MdAddShoppingCart /> */}
          </div>
        </Col>

        <Col xs={12} md={7} className="desc-item">
          <h3>Descripción</h3>
          <hr />
          <h4 className={"item-price"}>${product.price}</h4>
          {/*  <h6 className={"item-stock"}>Stock: {product.stock} unidades</h6> */}
          <p>{product.description}</p>
        </Col>
      </Row>
    </Section>
  );
};

export default ItemDetail;
