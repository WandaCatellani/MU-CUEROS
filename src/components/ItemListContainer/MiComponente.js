import React, { Component } from "react";
import "./MiComponente.scss";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "pizza",
      ingred: ["tomate", "queso", "oregano", "jamon"],
    };

    return (
      <div className="pizza">
        <h1>{receta.nombre}</h1>
        <h2>{`Los ingredientes son:`}</h2>
        <ol>
          {receta.ingred.map((ingrediente, i) => {
            console.log(ingrediente);
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default MiComponente;
