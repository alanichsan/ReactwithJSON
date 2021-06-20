import React from "react";
import { Card } from "react-bootstrap";

const ListPhotos = ({ photo }) => {
  return (
    <div>
      <Card className="shadow my-2">
        <Card.Body>
          <Card.Title>{photo.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={photo.url} />
      </Card>
    </div>
  );
};

export default ListPhotos;
