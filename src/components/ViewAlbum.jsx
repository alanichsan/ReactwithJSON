import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class ViewAlbum extends Component {
  render() {
    return (
      <div>
        <Container className="my-3">
        <Row>
            <Col>
              <a href="/user/album">
                <i class="fas fa-arrow-left my-4 text-success"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="shadow">
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://placeimg.com/300/300/animals" />
              </Card>
              <Card className="shadow my-3">
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://placeimg.com/300/300/any/grayscale" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
