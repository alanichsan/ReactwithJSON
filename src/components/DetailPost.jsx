import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import MyPost from "./MyPost";
import { JSON_API } from "../util/constansts";
import axios from "axios";
export default class DetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mypost: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(JSON_API + `posts?userId=${id}`)
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
        <Container className="my-4 card-post">
          <Row>
            <Col>
              <a href="/">
                <i class="fas fa-arrow-left mb-4 text-success"></i>
              </a>
              {post &&
                post.map((mypost) => (
                    <MyPost key={mypost.id} mypost={mypost} />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
