import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="md">
      <NavLink to="/" className="navLogo">
        Logo
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navLink" to="/">
            Inicio
          </NavLink>
          <NavLink className="navLink" to="#">
            Contacto
          </NavLink>
          <NavLink className="navLink" to="/tienda">
            Tienda
          </NavLink>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
