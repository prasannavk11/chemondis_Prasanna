import React from "react";

const Loading = React.memo(() => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status"></div>
    </div>
  );
});

export default Loading;
