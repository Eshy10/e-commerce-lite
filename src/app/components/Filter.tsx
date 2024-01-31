"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {sortProducts } from "@/lib/features/products";

const Filter = () => {
  const [sort, setSort] = useState("");
 const dispatch = useAppDispatch();

 const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div className="filterItem">
      <label>
        Sort by:
        <select value={sort} onChange={handleSortChange}>
          <option value="">--Select--</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
