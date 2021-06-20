import React, { Component } from "react";

import { Container,Row,Col,Navbar, Nav } from "react-bootstrap";



export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar expand="lg" className="nav">
                <Navbar.Brand href="/" className="text-success"><i class='fas fa-location-arrow'> Telme</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" className="text-success">Users</Nav.Link>
                    <Nav.Link href="/post" className="text-success">My Post</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
