import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-bootstrap/Modal";

const Grid = (props) => {
  const { type, data } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [photoData, setPhotoData] = useState({});
  const showModal = (data) => {
    setPhotoData(data);
    setIsOpen(true);
  };

  const hideModal = () => {
    setPhotoData({});
    setIsOpen(false);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 thumb">
      {type === "album" ? (
        <Link to={`/album/${data.id}`} style={{ textDecoration: "none" }}>
          <div className="card border-secondary mb-3">
            <div
              className="card-body text-secondary"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h5
                style={{ minHeight: "5rem" }}
                className="card-title text-capitalize card-ellipsis"
              >
                {data.title}
              </h5>
              <p className="card-text">{data.username}</p>
            </div>
          </div>
        </Link>
      ) : (
        <figure
          className="grid-image cursor-pointer"
          onClick={() => showModal(data)}
        >
          <LazyLoadImage
            className="img-fluid img-thumbnail"
            alt={data.thumbnailUrl}
            src={data.thumbnailUrl}
            width={"100%"}
            effect="blur"
          />
          <figcaption className="figure-caption text-capitalize">
            {data.title}
          </figcaption>
        </figure>
      )}
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="text-capitalize">{photoData.title}</h4>
            <h6>{photoData.username}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <figure className="grid-image">
            <LazyLoadImage
              className="img-fluid img-thumbnail"
              alt={photoData.url}
              src={photoData.url}
              width={"100%"}
              effect="blur"
            />
          </figure>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Grid;
