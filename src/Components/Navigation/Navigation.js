import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from  'react-bootstrap/Nav';
import logo from "./logo.png";

const Navigation = () => {
   return (
<Navbar bg="light" expand="sm">
  <Navbar.Brand href="#home">
    <img
        src={logo}
        width="80"
        height="80"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">History</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navigation;