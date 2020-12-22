import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./Home.scss";
import Greeting from "../../components/Greeting/Greeting";
import { products } from "../../dataBase/db";
import Imagenes from "../Carousel/Carousel";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      subtitulo: "Elegí tu producto favorito",
      products,
    };
  }

  render() {
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
      <main>
        <section className="container home">
          <Greeting greeting={"Bienvenidos!"} />
          <h2>{subtitulo}</h2>
        </section>

        <section className="container">{products}</section>

        <section className="container-fluid slider">
          <Imagenes />
        </section>
      </main>
    );
  }
}

export default Home;
