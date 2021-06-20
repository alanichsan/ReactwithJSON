import React, { Component } from "react";
import MyPost from "../components/main/MyPost";
import { JSON_API } from "../util/constansts";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(JSON_API + "posts?userId=1")
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <div className="my-3 card-post">
          <Container>
            <Row>
              <Col>
                <a href="/addpost" className="btn btn-success">
                  Create
                </a>
              </Col>
            </Row>
          </Container>
          {posts &&
            posts.map((mypost) => (
              <div>
                <MyPost key={mypost.id} mypost={mypost} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
