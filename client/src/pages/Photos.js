import React from "react";
import { Link } from "react-router-dom";

const Photos = () => {
  return (
    <section className="album-grid container">
      <Link to="/"> Go home</Link>
      <h1 className="my-4 text-center text-lg-left">Photos Gallery</h1>
    </section>
  );
};

export default Photos;
