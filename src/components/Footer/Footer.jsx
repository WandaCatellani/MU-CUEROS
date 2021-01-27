import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { SiInstagram } from "react-icons/si";
// import { FaTwitter } from "react-icons/fa";  {/* <FaTwitter /> */}
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdLocationOn } from "react-icons/md";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
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
              <li>
                <a href=".">Sucursal</a>
              </li>

              <li>
                <a href=".">Contáctenos</a>
              </li>

              <li>
                <a href=".">¿Cómo realizo mi compra?</a>
              </li>

              <li>
                <a href=".">Cambios</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="contactenos">
            <h5>Contáctenos</h5>

            <hr className="h5-hr" />

            <div className="icon-text">
              <a href="." className="icon-ubi" target="blank">
                <MdLocationOn />
              </a>

              <div className="data">Córdoba</div>
            </div>

            <div className="icon-text">
              <a href="tel:+" className="icon-cel" target="blank">
                <FaWhatsapp />
              </a>

              <a href="tel:+" className="data" target="blank">cel</a>
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

          <Col xs={12} md={3} className=".">
            <h5>Enlaces Útiles</h5>

            <hr className="h5-hr" />

            <ul>
              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} className=".">
            <h5>Enlaces Útiles</h5>

            <hr className="h5-hr" />

            <ul>
              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>

              <li>
                <a href=".">...</a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="copyright">
          <Col xs={12} md={4} className="copy">
            <p>&copy; 2020 Todos los Derechos Reservados</p>
          </Col>

          <Col xs={12} md={4} className="logotipo">
            <a href=".">
              <img src="https://" className="logoooo" alt="logo" />
            </a>
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
