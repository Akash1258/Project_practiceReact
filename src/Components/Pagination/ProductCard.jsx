import React from "react";
import "../../styles.css";

export const ProductCard = ({ data }) => {
  return (
    <div className="product-card">
      <img src={data?.thumbnail} alt={data?.title} />
      <div>{data?.title}</div>
    </div>
  );
};
