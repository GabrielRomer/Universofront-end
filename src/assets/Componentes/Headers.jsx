import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Headers extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Universo Front-end</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/conteudo">Linguagem Padrão</Nav.Link>
            <Nav.Link as={Link} to="/conteudo2">Linguagem de Programação</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}


export default Headers;
