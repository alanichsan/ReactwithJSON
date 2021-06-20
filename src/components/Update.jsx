import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { JSON_API } from "../util/constansts";
import axios from "axios";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  addData = () => {
    const id = this.props.match.params.id;
    const { title, body, userId } = this.state;
    axios
      .put(JSON_API + "posts/" + id, {
        id: id,
        title: title,
        body: body,
        userId: userId,
      })
      .then((response) => {
        this.props.history.push("/post");
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  handleChange(event) {
    var stateObject = function () {
      let returnObj = {};
      returnObj[this.target.name] = this.target.value;
      return returnObj;
    }.bind(event)();
    this.setState(stateObject);
  }
  render() {
    return (
      <div>
        <Container className="my-4">
          <Row>
            <Col lg="6">
              <a href="/post">
                <i class="fas fa-arrow-left mt-4 text-success"></i>
              </a>
              <Form>
                <h2 className="my-4">Apa yang sedang kamu pikirkan ?</h2>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Body</Form.Label>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="body"
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="success" onClick={this.addData}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
