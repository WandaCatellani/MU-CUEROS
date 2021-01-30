import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import VanillaTilt from 'vanilla-tilt';
import App from "./App";

/* RENDERIZA APP DENTRO DE ROOT
-------------------------------------------------- */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
