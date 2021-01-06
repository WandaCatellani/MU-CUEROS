import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
// import img1 from "../../assets/images/uno.jpg";
// import img2 from "../../assets/images/dos.jpg";
// import img3 from "../../assets/images/tres.jpg";
import img4 from "../../assets/images/cuatro.jpeg";


const Imagenes = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img4} alt="Third slide" />
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
