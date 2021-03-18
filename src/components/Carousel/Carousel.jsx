import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/portada.jpg";
import img2 from "../../assets/images/carteras-portada.jpg";
import img3 from "../../assets/images/tapabocas-portada.png";
import img4 from "../../assets/images/marca-portada.jpg";
import img5 from "../../assets/images/bandoleras-portada.jpg";
import img6 from "../../assets/images/billeteras-portada.jpg";

const Imagenes = () => {
  return (
    <Carousel className="carousel-home">
      <Carousel.Item className="imagen">
        <img
          className="img-fluid d-block w-100"
          src={img1}
          alt="varias carteras"
        />
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img
          className="img-fluid d-block w-100"
          src={img2}
          alt="cartera azul y cartera blanca"
        />
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img
          className="img-fluid d-block w-100"
          src={img3}
          alt="tapaboca negro"
        />
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img
          className="img-fluid d-block w-100"
          src={img4}
          alt="cartera bordo"
        />
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img className="img-fluid d-block w-100" src={img5} alt="bandoleras" />
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img className="img-fluid d-block w-100" src={img6} alt="billeteras" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Imagenes;
