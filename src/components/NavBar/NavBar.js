import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="lg">
      <NavLink to="/">Logo</NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="li" to="#">
            Contacto
          </NavLink>

          <NavLink className="li" to="/tienda">
            Tienda
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
