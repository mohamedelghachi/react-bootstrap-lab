import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/bicycleLOGO.jpg";
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Button variant="outline-success">Sign Up</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;
