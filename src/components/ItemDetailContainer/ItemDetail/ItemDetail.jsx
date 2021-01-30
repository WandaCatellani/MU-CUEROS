import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import VanillaTilt from "vanilla-tilt";
import Swal from "sweetalert2";
import "./ItemDetail.scss";
import Button from "../../Button/Button";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";
import useCartContext from "../../../context/CartContext";
import Section from "../../Section/Section";

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

    /*     Swal.fire({
      title: `Gracias. Te escribimos a la brevedad 🖤`,
      width: 600,
      padding: "3em",
      background: "#fff url(/images/logo.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url('../../assets/images/nyan-cat.gif')
        left top
        no-repeat`,
    }); */
  };

  return (
    <>
      <Section title="Detalle de productos">
        <Button content={"Atras"} path={"/"} className="btn-atras" />
        <Row className="detail">
          <Col xs={12} md={4}>
            <div ref={tilt} {...rest} className="m-5 detail-item">
              <img
                className="img-fluid item-img"
                src={product.picture}
                alt={"Imagen"}
              />

              <div className={"itemDetail"}>
                <h3 className={"item-title"}>{product.title}</h3>
                <h3 className={"item-model"}>Modelo: {product.model}</h3>

                <ItemCount initialValue={1} maxValue={15} onAdd={onAddItem} />

                <Button
                  className="item-btn"
                  content={`Agregar al carrito ${quantity} ${product.model}`}
                  callback={addToCart}
                />
              </div>
            </div>
          </Col>

          <Col xs={12} md={8} className="desc-item">
            <h3>description</h3>
            <hr />
            <h4 className={"item-price"}>${product.price}</h4>
            <h6 className={"item-stock"}>Stock: {product.stock} unidades</h6>
            <p>{product.description}</p>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ItemDetail;
