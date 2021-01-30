import React from "react";
import "./Home.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Imagenes from "../../components/Carousel/Carousel";
// import ItemListContainer from ""

const Home = () => {
  return (
    <div className="home">
      <SocialMedia />
      <Imagenes />
    </div>
  );
};

export default Home;

//  Somos una empresa especializada en la creación de bolsos, carteras y mochilas en cuero 100% vacuno.
