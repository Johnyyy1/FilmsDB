import React from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Navbar.Brand href="#" className="navbar-brand">JMovies</Navbar.Brand>
        <Form className="search-form">
          <FormControl
            type="search"
            placeholder="Search movies..."
            className="search-input"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </Form>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Favorites</Nav.Link>
            <Nav.Link href="#">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;