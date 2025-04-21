import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';  // Ganti Link dengan NavLink

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">My Portfolio</Navbar.Brand>  {/* Gunakan NavLink untuk penandaan aktif */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Gunakan NavLink dan aktifkan styling untuk link aktif */}
            <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/team" activeClassName="active-link">
              Team
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
