import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const ListComment = ({ comment }) => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col>
          <ListGroup variant="flush">
                <ListGroup.Item>
                    <div className="badge badge-light">@ {comment.name} </div> {comment.body}
                </ListGroup.Item>
              </ListGroup>
              <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListComment;
