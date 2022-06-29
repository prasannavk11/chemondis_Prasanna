import React from "react";

const Pagination = (props) => {
  const { pageNumber, onChangePageNumber, disabled, noMoreData } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={
            pageNumber === 0 || disabled
              ? "page-item disabled"
              : "page-item cursor-pointer"
          }
          onClick={onChangePageNumber}
        >
          <div className="page-link">Previous</div>
        </li>
        <li
          className={
            disabled || noMoreData
              ? "page-item disabled"
              : "page-item cursor-pointer"
          }
          onClick={onChangePageNumber}
        >
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
