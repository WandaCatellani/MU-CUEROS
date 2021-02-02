import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { SiInstagram } from "react-icons/si";
// import { FaTwitter } from "react-icons/fa";  {/* <FaTwitter /> */}
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdLocationOn } from "react-icons/md";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import dataFiscal from "../../assets/images/data-fiscal.jpg";

const Footer = () => {
  return (
    <footer id="footer" className="container-fluid">
      <Container>
        <Row className="subscription">
          <Col>
            <h5>Suscribite para recibir nuestras novedades</h5>

            <div className="subs-email">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <div className="input-icon">
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Ingrese su email"
                    />

                    <a
                      href="https://github.com/cwand7"
                      className="icon-email"
                      target="blank"
                    >
                      <MdMailOutline />
                    </a>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="menu-footer">
          <Col xs={12} md={3} className="enlaces-utiles">
            <h5>Enlaces Útiles</h5>

            <hr className="h5-hr" />

            <ul>
              <Link className="li" to="/">
                Atención al Cliente
              </Link>

              <Link className="li" to="/">
                Cambios y devoluciones
              </Link>

              <Link className="li" to="/">
                Información de Envíos
              </Link>

              <Link className="li" to="/">
                Medios de Pago
              </Link>
            </ul>
          </Col>

          <Col xs={12} md={3} className="contactenos">
            <h5>Contáctenos</h5>

            <hr className="h5-hr" />

            <div className="icon-text">
              <a href="." className="icon-ubi" target="blank">
                <MdLocationOn />
              </a>

              <p className="data">Córdoba</p>
            </div>

            <div className="icon-text">
              <a href="tel:+" className="icon-cel" target="blank">
                <FaWhatsapp />
              </a>

              <a href="tel:+" className="data" target="blank">
                cel
              </a>
            </div>

            <div className="icon-text">
              <a href="mailto:." className="icon-mail" target="blank">
                <MdMailOutline />
              </a>

              <a href="mailto:." className="data" target="blank">
                Mail
              </a>
            </div>
          </Col>

          <Col xs={12} md={3} className="institucional">
            <h5>Institucional</h5>

            <hr className="h5-hr" />

            <ul>
              <Link className="li" to="/">
                Quienes Somos
              </Link>

              <Link className="li" to="/">
                Trabaja con Nosotros
              </Link>

              <Link className="li" to="/">
                Contacto
              </Link>

              <Link className="li" to="/">
                Términos y Condiciones
              </Link>
            </ul>
          </Col>

          <Col xs={12} md={3} className="dataFiscal">
            <img
              src={dataFiscal}
              className="dataFiscal-img"
              alt="data fiscal"
            />
          </Col>
        </Row>

        <Row className="copyright">
          <Col xs={12} md={5} className="copy">
            <p>&copy; 2021 Todos los Derechos Reservados</p>
          </Col>

          <Col xs={12} md={2} className="logotipo">
            <Link to="/" className="logo">
              <img className="img-fluid" src={logo} alt="logo" />
            </Link>
          </Col>

          <Col xs={12} md={5} className="links">
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
        </Row>

        <Row>
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
