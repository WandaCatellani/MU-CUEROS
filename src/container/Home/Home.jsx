import React from "react";
import "./Home.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
// import Imagenes from "../../components/Carousel/Carousel";
import ItemListContainer from "../../container/ItemListContainer/ItemListcontainer";
import BackgroundHome from "../../assets/images/mochilas/a4.jpg";

const Home = () => {
  return (
    <div className="home">
      <SocialMedia />
      {/* <Imagenes /> */}
      <div className="imagen-home">
        <img className="fondo" src={BackgroundHome} alt="" />
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Home;

//  Somos una empresa especializada en la creación de bolsos, carteras y mochilas en cuero 100% vacuno.
