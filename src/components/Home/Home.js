import React, { Component } from "react";
import "./Home.scss";
// import ItemList from "./components/ItemList/ItemList"

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import {products} from "../dataBase/db";

class Home extends Component {
  constructor() {
    /* Hereda component de React */
    super();
    /* State indica el estado de los datos */
    this.state = {
      subtitulo: "Elegí tu producto favorito",
      products: products,
    };
  }

  render() {
    const { title } = this.props;
    const { subtitulo } = this.state;
    const products = this.state.products.map((product, i) => {
      return (
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://www.soscomputacion.com.ar/14852-large_default/celular-xiaomi-redmi-note-8-64gb-4gb-ram-4-camaras-48mpx-snapdragon-665-aie.jpg" />
            <Card.Body>
              <Card.Title> {products.title} </Card.Title>
              <Card.Text> {products.modelo} </Card.Text>
            </Card.Body>
            <Card.Footer> {products.precio} </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.soscomputacion.com.ar/14852-large_default/celular-xiaomi-redmi-note-8-64gb-4gb-ram-4-camaras-48mpx-snapdragon-665-aie.jpg" />
            <Card.Body>
              <Card.Title> {products.title} </Card.Title>
              <Card.Text> {products.modelo} </Card.Text>
            </Card.Body>
            <Card.Footer> {products.precio} </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.soscomputacion.com.ar/14852-large_default/celular-xiaomi-redmi-note-8-64gb-4gb-ram-4-camaras-48mpx-snapdragon-665-aie.jpg" />
            <Card.Body>
              <Card.Title> {products.title} </Card.Title>
              <Card.Text> {products.modelo} </Card.Text>
            </Card.Body>
            <Card.Footer> {products.precio} </Card.Footer>
          </Card>
        </CardDeck>
      );
    });

    return (
      <div>
        <section className="container home">
          <h1>{title}</h1>
          <h2>{subtitulo}</h2>
        </section>
        <section className="container">{products}</section>
      </div>
    );
  }
}

export default Home;