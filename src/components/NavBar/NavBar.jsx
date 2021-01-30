import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="md">
      <NavLink to="/" className="navLogo">
        <img src= {logo} alt="logo"/>
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
          <NavLink className="navLink" to="#">
            Sobre Nosotros
          </NavLink>
          <NavLink className="navLink" to="#">
            Contacto
          </NavLink>
          <NavLink className="navLink" to="/tienda">
            Tienda
          </NavLink>

          <NavDropdown title="TIENDA" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Carteras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Mochilas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Billeteras</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Ver Mas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

/* <div>
  <ul>
    <li>
      <div>Categorias</div>
      <div>
        <Link to={`/categories/key1`}>
          <div>key1</div>
        </Link>
        <Link to={`/categories/key2`}>
          <div>key1</div>
        </Link>
        <Link to={`/categories/key3`}>
          <div>key1</div>
        </Link>
      </div>
    </li>
  </ul>
</div>; */
