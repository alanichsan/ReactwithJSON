import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ListUser = ({ user }) => {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col lg={8}>
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-success">
                  {user.username}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {user.email}
                </Card.Subtitle>
                <Card.Text>{user.name}</Card.Text>
                <Card.Link
                  href={`/user/post/${user.id}`}
                  className="badge badge-success"
                >
                  view post
                </Card.Link>
                <Card.Link
                  href={`/user/album/${user.id}`}
                  className="badge badge-success"
                >
                  view album
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ListUser;
