import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListAlbum from "./ListAlbum";
import { JSON_API } from "../util/constansts";
import axios from "axios";

export default class DetailAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(JSON_API + `albums?userId=${id}`)
      .then((res) => {
        const post = res.data;
        this.setState({ post });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { post } = this.state;
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
              {post &&
                post.map((album) => <ListAlbum key={album.id} album={album} />)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
