"use client";

import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {sortProducts } from "@/lib/features/products";

const Filter = () => {
  const [sort, setSort] = useState("");
 const dispatch = useAppDispatch();

 const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div className="filterItem ml-4 mt-6 lg:mt-0">
      <label>
        Sort by:
        <select value={sort} onChange={handleSortChange} className="ml-1 border border-[#b3b0b0] p-2 rounded-sm">
          <option value="">-Select-</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
