import React from "react";
import { Link } from "react-router-dom";

const Grid = (props) => {
  const { type, data } = props;
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
                className="card-title card-ellipsis"
              >
                {data.title}
              </h5>
              <p className="card-text">{data.username}</p>
            </div>
          </div>
        </Link>
      ) : (
        <figure>
          <img
            className="img-fluid img-thumbnail"
            src={data.url}
            alt={data.url}
          />
        </figure>
      )}
    </div>
  );
};

export default Grid;
