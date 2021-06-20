import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import ListComment from "./ListComment";
import { JSON_API } from "../util/constansts";
import axios from "axios";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(JSON_API + `comments?postId=${id}`)
      .then((res) => {
        const comments = res.data;
        this.setState({ comments });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { comments } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <a href="/">
                <i class="fas fa-arrow-left my-4 text-success"></i>
              </a>
              <a href="/addpost" className="btn btn-success float-right my-4">
                Join Comment
              </a>
              {comments &&
              comments.map((comment) => (
                <ListComment key={comment.id} comment={comment} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
