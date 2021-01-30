import React, { useState } from "react";
import { getFirestore } from "../../backend/firebase/Firebase";
import useCartContext from "../../context/CartContext";
import Button from "../../components/Button/Button";
import { Form, Col, Row } from "react-bootstrap";
import "./CheckoutContainer.scss";

const CheckoutContainer = () => {
  const [validated, setValidated] = useState(false);
  const { products, getGrandTotal } = useCartContext();
  const [orderId, setOrderId] = useState();
  const db = getFirestore();
  const orders = db.collection("orders");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="form"
          >
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" id="name" required />
                <Form.Control.Feedback>Good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" id="surname" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid mail.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" id="address" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Address.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" id="state" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom06">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" id="zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
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
            {/* Así no funciona para validar */}
            {/* <Button type={"submit"} content={"Finalizar Compra"} callback={() => Compra()} /> */}
          </Form>
        </Col>

        <Col xs={12} md={7} className="detalle">
          <h3>Resumen de tu Orden</h3>

          <div className={"resumen"}>
            <h4>Producto</h4>
            <h4>Cantidad</h4>
            <h4>Precio</h4>
            <h4>Id Producto</h4>
          </div>

          {products.map((product) => {
            return (
              <div key={product.id} className={"orden-checkout"}>
                <h4>{product.model}</h4>
                <h4>{product.quantity}</h4>
                <h4>${product.price}</h4>
                <h4>{orderId}</h4>
              </div>
            );
          })}

          <div className={"total-checkout"}>
            <h4>Total</h4>
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
