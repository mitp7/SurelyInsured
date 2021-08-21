import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

export default () => { 
    return (
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    )
}