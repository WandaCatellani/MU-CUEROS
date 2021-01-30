import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/carteras/beige.jpg";
import img2 from "../../assets/images/tapabocas/negro.jpg";
import img3 from "../../assets/images/mochilas/ram.jpg";
// img-fluid
const Imagenes = () => {
  return (
    <Carousel class="carousel-home">
      <Carousel.Item class="item-c"> 
        <img className="d-block w-100" src={img1} alt="First " />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item class="item-c">
        <img
          className="d-block w-100 "
          src={img2}
          alt="Second "
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item class="item-c">
        <img className="d-block w-100 " src={img3} alt="Third " />
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Imagenes;
