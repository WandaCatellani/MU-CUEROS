import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiInstagram } from "react-icons/si";
// import { FaTwitter } from "react-icons/fa";  {/* <FaTwitter /> */}
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <Container>
        <Row className="footer">
          <Col xs={12} md={4} className="menu">
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="Contacto">Contacto</a>
              </li>
              <li>
                <a href="Tienda">Tienda</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="links">
            <a
              href="https://www.instagram.com/mucueros/"
              className="icon-inst"
              target="blank"
            >
              <SiInstagram />
            </a>

            <a
              href="https://www.facebook.com/Mu-Cueros-Y-Dise%C3%B1os-1987201624682375/"
              className="icon-face"
              target="blank"
            >
              <FaFacebook />
            </a>
          </Col>

          <Col xs={12} md={4} className="logotipo">
            <a href="loooogo">
              <img src="https://" className="logo" alt="logo" />
            </a>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={12} className="copyright">
            <p>&copy; 2020 Todos los Derechos Reservados</p>
          </Col>

          <Col xs={12} className="created">
            <p>
              Created by{" "}
              <a
                href="https://www.linkedin.com/in/wan-catellani-4b569576/"
                target="blank"
              >
                Wanda Catellani
              </a>
            </p>
            <a
              href="https://github.com/cwand7"
              className="icon-github"
              target="blank"
            >
              <FaGithub />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
