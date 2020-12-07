import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="container footer">
        <CartWidget />
        <h6>&copy; Copyright 2020</h6>
      </section>
    </footer>
  );
};

export default Footer;
