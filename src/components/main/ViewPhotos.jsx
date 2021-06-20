import React, { Component } from "react";
import ListPhotos from "./ListPhotos";

import { Container, Row, Col } from "react-bootstrap";

import { JSON_API } from "../../util/constansts";
import axios from "axios";

export default class ViewAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(JSON_API + `photos?userId=${id}`)
      .then((res) => {
        const photos = res.data;
        this.setState({ photos });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { photos } = this.state;
    return (
      <div>
        <Container className="my-3">
          <Row>
            <Col>
              <a href="/">
                <i class="fas fa-arrow-left my-4 text-success"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              {photos &&
                photos.map((photo) => (
                  <ListPhotos key={photo.id} photo={photo} />
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
