import React from "react";
import "./Home.scss";
import Imagenes from "../../components/Carousel/Carousel";
import ItemListContainer from "../../container/ItemListContainer/ItemListcontainer";
// import BackgroundHome from "../../assets/images/mochilas/a4.jpg";

const Home = () => {
  return (
    <div className="home">
      <Imagenes />
      {/* <div className="imagen-home">
        <img className="fondo" src={BackgroundHome} alt="" />
      </div> */}
      <h1>MU CUEROS</h1>
      <p>Cuero 100% vacuno</p>
      <ItemListContainer />
    </div>
  );
};

export default Home;

// 
