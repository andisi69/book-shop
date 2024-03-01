import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor: 'rgb(138, 139, 140)'}}>
    <Container>
      <Navbar.Brand href="/" style={{color: 'white'}}>Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
          <Nav.Link href="/favourites" style={{color: 'white'}}>Favourites</Nav.Link>
          <Nav.Link href="/cart" style={{color: 'white'}}><i className="bi bi-cart"></i><span>0</span></Nav.Link>
          <Nav.Link href="/login" style={{color: 'white'}}><i className="bi bi-box-arrow-right"></i></Nav.Link>
          <Nav.Link href="/dashboard" style={{color: 'white'}}>Dashboard</Nav.Link>
          <Nav.Link href="/register" style={{color: 'white'}}>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Header