import React, { useState } from "react";
import { useDataFetch } from "../Hooks/useFetchData";
import { ProductCard } from "./ProductCard";
import "../styles.css";
import { Pagination } from "./Pagination";

const DATA_PER_PAGE = 10;

export const ProductContainer = () => {
  const [currPage, setCurrPage] = useState(0);
  const [loading, data, error] = useDataFetch(
    "https://dummyjson.com/products?limit=500&select=title,price,id,thumbnail"
  );
  const noOfPages = Math.ceil(data?.total / DATA_PER_PAGE);
  const startPageData = currPage * DATA_PER_PAGE;
  const endPageData = currPage * DATA_PER_PAGE + DATA_PER_PAGE;
  if (error) {
    return <div>Failed to Load Data</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>Products</div>
      <div className="product-container">
        {data?.products?.slice(startPageData, endPageData)?.map((item) => (
          <div key={item?.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>
      <div className="pagination-cont">
        <Pagination
          noOfPages={noOfPages}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      </div>
    </div>
  );
};
