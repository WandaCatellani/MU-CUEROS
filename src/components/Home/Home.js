import React, { Component } from "react";
import "./Home.scss";
// import ItemList from "./components/ItemList/ItemList"

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import { products } from "../../dataBase/db";

class Home extends Component {
  constructor() {
    /* Hereda component de React */
    super();
    /* State indica el estado de los datos */
    this.state = {
      subtitulo: "Elegí tu producto favorito",
      products,
    };
  }

  render() {
    const { title } = this.props;
    const { subtitulo } = this.state;
    const products = this.state.products.map((product, i) => {
      return (
        <div className="row">
          <CardDeck className="col-md-4">
            <Card>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title> {product.title} </Card.Title>
                <Card.Text> {product.modelo} </Card.Text>
              </Card.Body>
              <Card.Footer> {product.precio} </Card.Footer>
            </Card>
          </CardDeck>
        </div>
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
