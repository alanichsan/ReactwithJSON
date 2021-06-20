import React from "react";
import { ListGroup } from "react-bootstrap";

const ListAlbum = ({ album }) => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          {album.title}
          <a href={`/album/photo/${album.id}`} className="float-right">
            <i class="far fa-eye text-success"></i>
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ListAlbum;
