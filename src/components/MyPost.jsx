import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { JSON_API } from "../util/constansts";
import axios from "axios";

import {
  useLocation
} from "react-router-dom";
const Delete = (id) => {
  axios
  .delete(JSON_API + `posts/` + id)
  .then((res) => {
    console.log("Wow");
  })
  .catch((error) => {
    console.log(error);
  });
}
const Mymypost = ({ mypost }) => {
  let location = useLocation();
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col md="6">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  {mypost.title}
                </Card.Title>
                <Card.Text>{mypost.body}</Card.Text>
              </Card.Body>
              <blockquote className="blockquote mb-0 card-body">
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Last updated <cite title="Source Title">3 mins ago</cite>
                  </small>
                  { location.pathname === "/post" &&
                    <div>
                    <a onClick={() => Delete(mypost.id)} href="#" >
                      <i className="fas fa-eraser float-right text-success mr-2"></i>
                    </a>
                    <a href={`/post/edit/${mypost.id}`}>
                      <i className="fas fa-paperclip float-right text-success mx-2"></i>
                    </a>
                  </div> 
                  }

                  <a href={`/post/comments/${mypost.id}`}>
                    <i className="fas fa-comment-dots float-right text-success"></i>
                  </a>
                </footer>
              </blockquote>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mymypost;
