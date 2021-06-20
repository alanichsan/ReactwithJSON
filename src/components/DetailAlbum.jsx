import React, { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default class DetailAlbum extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <a href="/">
                <i class="fas fa-arrow-left my-4 text-success"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <ListGroup>
                <ListGroup.Item>
                    Cras justo odio 
                    <a href="/album/photo" className="float-right"><i class="far fa-eye text-success"></i></a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
