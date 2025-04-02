import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Navbar.css";

const NavbarComponent = ({ data, onSearch }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">JMovies</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Search data={data} onSearch={onSearch} />
        
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
