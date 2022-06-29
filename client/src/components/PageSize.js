import React from "react";

const PageSize = (props) => {
  const { sizes, count, onChangePageSize, disabled } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        {sizes &&
          sizes.map((size, index) => {
            return (
              <li
                key={index}
                className={disabled ? "page-item disabled" : "page-item"}
                onClick={onChangePageSize}
              >
                <div
                  className={
                    count === size
                      ? "page-link cursor-pointer active"
                      : "page-link cursor-pointer"
                  }
                >
                  {size}
                </div>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default PageSize;
