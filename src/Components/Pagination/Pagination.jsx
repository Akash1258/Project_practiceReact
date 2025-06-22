import React from "react";
import "../../styles.css";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

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
          <AiOutlineCaretLeft />
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
          <AiOutlineCaretRight />
        </button>
      </div>
    </div>
  );
};
