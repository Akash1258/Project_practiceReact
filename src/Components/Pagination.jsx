import React from "react";
import "../styles.css";

export const Pagination = ({ noOfPages, currPage, setCurrPage }) => {
  return (
    <div>
      <div>
        <button
          type="button"
          disabled={currPage === 0}
          onClick={() => {
            setCurrPage((prev) => prev - 1);
          }}
          className="page-icon"
        >
          <img
            src={
              "https://www.shutterstock.com/image-vector/left-arrow-icon-vector-trendy-260nw-1934818211.jpg"
            }
            alt="left"
          />
        </button>
        {noOfPages
          ? [...Array(noOfPages)?.keys()].map((page) => (
              <span
                onClick={() => {
                  setCurrPage(page);
                }}
                className={`pages ${currPage === page ? "active-page" : ""}`}
                key={page}
              >
                {page}
              </span>
            ))
          : ""}

        <button
          type="button"
          disabled={currPage === noOfPages}
          onClick={() => {
            setCurrPage((prev) => prev + 1);
          }}
          className="page-icon"
        >
          <img
            src={
              "https://icons.veryicon.com/png/o/miscellaneous/background-basic-version-icon-library/34-right-side.png"
            }
            alt="left"
          />
        </button>
      </div>
    </div>
  );
};
