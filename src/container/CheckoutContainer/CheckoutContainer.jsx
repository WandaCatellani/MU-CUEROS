import React, { useState } from "react";
import { getFirestore } from "../../backend/firebase/Firebase";
import useCartContext from "../../context/CartContext";
import Button from "../../components/Button/Button";
import { Form, Col, Row } from "react-bootstrap";
import "./CheckoutContainer.scss";

const CheckoutContainer = () => {
  const { products, getGrandTotal } = useCartContext();
  const [orderId, setOrderId] = useState();
  const db = getFirestore();
  const orders = db.collection("orders");

  const Compra = () => {
    let precioTotal = getGrandTotal(products);
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#surname").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let estado = document.querySelector("#state").value;
    let zip = document.querySelector("#zip").value;

    const newOrder = {
      buyer: nombre,
      apellido: apellido,
      email: email,
      address: address,
      estado: estado,
      zip: zip,
      total: precioTotal,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        alert("Compra realizada con éxito");
        console.log(orderId);
      });
  };

  return (
    <div className="container checkout">
      <Row>
        <Col xs={12} md={5} className="formulario">
          <Form className="form">
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" id="name" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="formGridName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" id="surname" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" id="address" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" id="state" required />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" id="zip" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group>
                <Form.Check
                  required
                  label="Acepta los terminos y condiciones"
                  feedback="You must agree before submitting."
                  className="term-cond"
                />
              </Form.Group>
            </Form.Row>

            <Button
              className="btn-fin"
              content={"Finalizar Compra"}
              callback={() => Compra()}
            />
          </Form>
        </Col>

        <Col xs={12} md={7} className="detalle">
          <h3>Resumen de tu Orden</h3>

          <div className="titles-checkout">
            <h5 className="title-pro">Producto</h5>
            <h5 className="title-can">Cantidad</h5>
            <h5 className="title-pr">Precio</h5>
            <h5 className="title-id">Id Producto</h5>
          </div>

          {products.map((product) => {
            return (
              <div key={product.id} className={"orden-checkout"}>
                <img
                  className="img-fluid checkout-image"
                  src={product.picture}
                  alt="prod"
                />
                <h6 className="checkout-q">{product.quantity}</h6>
                <h6 className="checkout-pr">${product.price}</h6>
                <h6 className="checkout-id">{orderId}</h6>
              </div>
            );
          })}

          <div className={"total-checkout"}>
            <h4>Total:</h4>
            <p>${getGrandTotal()}</p>
          </div>

          <div className={"btn-checkout"}>
            <Button
              className="btn-seguir"
              content={"Seguir Comprando"}
              path="/categories"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutContainer;
