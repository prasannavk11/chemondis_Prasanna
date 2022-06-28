import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div style={{ margin: "2% auto", width: "80%" }}>
      <Link to="/"> Go home</Link>
      <h1>404</h1>
    </div>
  );
};

export default NoPage;
