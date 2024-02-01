"use client";

import React, { useState } from "react";

import { Product } from "@/types";

interface FilterProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Filter = ({ setProducts, products }: FilterProps) => {
  const [sort, setSort] = useState("");
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    const sortedProducts = [...products];
    if (e.target.value === "lowest") {
      setProducts(sortedProducts.sort((a, b) => a.price - b.price));
    } else if (e.target.value === "highest") {
      setProducts(sortedProducts.sort((a, b) => b.price - a.price));
    }
  };

  return (
    <div className="filterItem ml-4 mt-6 lg:mt-0">
      <label>
        Sort by Price:
        <select
          value={sort}
          onChange={handleSortChange}
          className="ml-1 border border-[#b3b0b0] p-2 rounded-sm"
        >
          <option value="">-Select-</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
