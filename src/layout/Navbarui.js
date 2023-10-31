import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navbarui() {
  return (
    <Navbar
      className="custom-navbar"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">SpringBoot App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
        </Navbar.Collapse>
        <Link className="btn btn-outline-light" to="/adduser">
          Add User
        </Link>
      </Container>
    </Navbar>
  );
}
