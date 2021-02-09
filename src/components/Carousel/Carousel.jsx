import React from "react";
import "./Carousel.scss";
import Carousel from "react-bootstrap/Carousel";
// import img1 from "../../assets/images/carteras/beige.jpg";
// import img2 from "../../assets/images/tapabocas/negro.jpg";
// import img3 from "../../assets/images/mochilas/ram.jpg";

const Imagenes = () => {
  return (
    <Carousel className="carousel-home">
      <Carousel.Item className="imagen"> 
        <img className="img-fluid d-block w-100" src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/49899977_1987237524678785_1498565375778881536_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=WQdOYMnq-3EAX_zsRym&_nc_ht=scontent.fcor2-2.fna&oh=f73c9a48aeeaf84c99d1c25dea3f6554&oe=6046597E" alt="First" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img
          className="img-fluid d-block w-100 "
          src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/95191507_2840377769364752_5751788793707364352_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=Bn8sCF3o-UMAX9H7TCC&_nc_ht=scontent.fcor2-1.fna&oh=b5bf9380a2b63c23f2977577f87aee1d&oe=604862DC"
          alt="Second"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img className="img-fluid d-block w-100 " src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/114624371_3049226645146529_3108756517371161159_n.png?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=Amknn984EgkAX_hEdYa&_nc_ht=scontent.fcor2-1.fna&oh=54fca38e82fb6aa9978b7c6bc7a06818&oe=604840B7" alt="Third" />
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img className="img-fluid d-block w-100 " src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.0-9/71206639_2386506041418596_5624090688623738880_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=zD85h0v9yoEAX_wxch-&_nc_ht=scontent.fcor2-1.fna&oh=13342dc4f2a008d256a921e0f6be37e8&oe=6047ABD0" alt="Cuarta" />
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagen">
        <img className="img-fluid d-block w-100 " src="https://scontent.fcor2-2.fna.fbcdn.net/v/t1.0-9/117177713_3087870621282131_3071170508720412630_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=EUh733JXpjIAX_2LMq5&_nc_ht=scontent.fcor2-2.fna&oh=e2dfa5fe2f3ec15910049b6cbed6b041&oe=604700E8" alt="Quinta" />
        
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
