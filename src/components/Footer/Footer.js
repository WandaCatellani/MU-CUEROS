import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="container footer">
        <div className="redes">
          <SiInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>

        <p>&copy; Copyright 2020</p>
      </section>
    </footer>
  );
};

export default Footer;
